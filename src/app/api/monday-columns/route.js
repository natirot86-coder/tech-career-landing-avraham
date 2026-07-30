/**
 * Helper endpoint: GET /api/monday-columns
 * Returns all columns in the board so you can find the correct column IDs
 * and update COLUMN_IDS in /api/submit/route.js
 *
 * Only works in development or when MONDAY_API_TOKEN is set.
 */

const BOARD_ID = '18396761860';

export async function GET() {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token || token === 'your_monday_api_token_here') {
    return Response.json({ error: 'MONDAY_API_TOKEN not set' }, { status: 400 });
  }

  const query = `
    query {
      boards(ids: [${BOARD_ID}]) {
        name
        columns {
          id
          title
          type
        }
      }
    }
  `;

  const res = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
      'API-Version': '2024-01',
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  if (data.errors) {
    return Response.json({ errors: data.errors }, { status: 500 });
  }

  return Response.json(data.data?.boards?.[0] ?? {});
}
