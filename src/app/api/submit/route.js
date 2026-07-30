/**
 * Monday.com Lead Submission API
 * Board: https://tech-career-team.monday.com/boards/18396761860
 *
 * SETUP:
 * 1. Set MONDAY_API_TOKEN in your .env.local / Vercel environment variables
 * 2. Run /api/monday-columns to discover your board's column IDs
 * 3. Update COLUMN_IDS below to match your board
 */

const BOARD_ID = '18396761860';
const SOURCE_TAG = 'landing-page-avraham';

/**
 * Column IDs for the Monday.com board.
 * To find your column IDs: GET /api/monday-columns
 * Or in Monday.com: Board Settings → Columns → right-click column → "Copy column ID"
 *
 * Common defaults — update these if they don't match your board:
 */
const COLUMN_IDS = {
  email: process.env.MONDAY_COL_EMAIL || 'email',
  phone: process.env.MONDAY_COL_PHONE || 'phone',
  city: process.env.MONDAY_COL_CITY || 'text',
  source: process.env.MONDAY_COL_SOURCE || 'text1',
};

function buildColumnValues({ email, phone, city }) {
  const values = {};

  if (email) {
    values[COLUMN_IDS.email] = { email: email, text: email };
  }

  if (phone) {
    values[COLUMN_IDS.phone] = { phone: phone, countryShortName: 'IL' };
  }

  if (city) {
    values[COLUMN_IDS.city] = city;
  }

  if (COLUMN_IDS.source) {
    values[COLUMN_IDS.source] = SOURCE_TAG;
  }

  return JSON.stringify(values);
}

async function createMondayItem({ name, email, phone, city }) {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token || token === 'your_monday_api_token_here') {
    throw new Error('MONDAY_API_TOKEN is not configured');
  }

  const columnValues = buildColumnValues({ email, phone, city });

  const query = `
    mutation CreateLead($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId
        item_name: $itemName
        column_values: $columnValues
      ) {
        id
        name
      }
    }
  `;

  const response = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
      'API-Version': '2024-01',
    },
    body: JSON.stringify({
      query,
      variables: {
        boardId: BOARD_ID,
        itemName: name || 'ליד חדש',
        columnValues,
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Monday API HTTP error ${response.status}: ${text}`);
  }

  const data = await response.json();

  if (data.errors?.length) {
    const msg = data.errors.map((e) => e.message).join(', ');
    throw new Error(`Monday API error: ${msg}`);
  }

  return data.data?.create_item;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, city } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return Response.json(
        { error: 'שם, אימייל וטלפון הם שדות חובה' },
        { status: 400 }
      );
    }

    const item = await createMondayItem({ name, email, phone, city });

    return Response.json({ success: true, itemId: item?.id });
  } catch (err) {
    console.error('[/api/submit] Error:', err.message);

    // Return a user-friendly error
    const isConfig = err.message.includes('MONDAY_API_TOKEN');
    return Response.json(
      {
        error: isConfig
          ? 'שגיאת תצורה — יש להגדיר את MONDAY_API_TOKEN'
          : 'שגיאה בשמירת הפרטים. אנא נסו שוב.',
        detail: process.env.NODE_ENV === 'development' ? err.message : undefined,
      },
      { status: 500 }
    );
  }
}
