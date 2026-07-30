/**
 * Monday.com Lead Submission API
 * Board: https://tech-career-team.monday.com/boards/18396761860
 * Board name: לוח מועמדים ניסיון - נטלי נתי ואורלי
 * Column IDs discovered via Monday.com MCP — no manual configuration needed.
 */

const BOARD_ID = 18396761860;
const GROUP_ID = 'topics'; // "מועמדים חדשים מטופס הרשמה"

function buildColumnValues({ email, phone, city, firstName, lastName }) {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const values = {
    // Email (text column)
    text_mkyq3a1: email || '',

    // Phone (phone column)
    phone_mm46se7z: phone
      ? { phone: phone.replace(/\D/g, ''), countryShortName: 'IL' }
      : '',

    // City
    text_mm05bcne: city || '',

    // First / Last name split
    text_mkywv4ea: firstName || '',
    text_mkyqqaf9: lastName || '',

    // Status → "השאיר/ה פרטים" (label id: 5)
    color_mm01x6p7: { label: 'השאיר/ה פרטים' },

    // UTM / source tracking
    text_mm5qatev: 'landing-page-avraham',

    // Submission date
    date_mm059f56: { date: today },
  };

  return JSON.stringify(values);
}

function splitName(fullName = '') {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ') || '';
  return { firstName, lastName };
}

async function createMondayItem({ name, email, phone, city }) {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token || token === 'your_monday_api_token_here') {
    throw new Error('MONDAY_API_TOKEN is not configured');
  }

  const { firstName, lastName } = splitName(name);
  const columnValues = buildColumnValues({ email, phone, city, firstName, lastName });

  const query = `
    mutation CreateLead($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId
        group_id: $groupId
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
        groupId: GROUP_ID,
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
