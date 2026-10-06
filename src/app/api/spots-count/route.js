/**
 * Returns the real number of exposure-day leads already registered in Monday.com,
 * so the landing page's "spots taken" indicator reflects verified data instead of
 * a hardcoded number. Same board/token as /api/submit.
 */

const BOARD_ID = 18396761860;
const UTM_SOURCE = 'landing-page-exposure';

export async function GET() {
  const token = process.env.MONDAY_API_TOKEN;
  if (!token || token === 'your_monday_api_token_here') {
    return Response.json({ error: 'MONDAY_API_TOKEN is not configured' }, { status: 503 });
  }

  const query = `
    query ExposureLeadsCount($boardId: ID!) {
      boards(ids: [$boardId]) {
        items_page(
          limit: 500
          query_params: {
            rules: [{ column_id: "text_mm5qatev", compare_value: ["${UTM_SOURCE}"], operator: contains_text }]
          }
        ) {
          items { id }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        'API-Version': '2024-01',
      },
      body: JSON.stringify({ query, variables: { boardId: BOARD_ID } }),
      next: { revalidate: 120 },
    });

    if (!response.ok) throw new Error(`Monday API HTTP error ${response.status}`);

    const data = await response.json();
    if (data.errors?.length) throw new Error(data.errors.map((e) => e.message).join(', '));

    const count = data.data?.boards?.[0]?.items_page?.items?.length ?? 0;
    return Response.json({ count });
  } catch (err) {
    console.error('[/api/spots-count] Error:', err.message);
    return Response.json({ error: 'שגיאה בטעינת נתוני ההרשמה' }, { status: 500 });
  }
}
