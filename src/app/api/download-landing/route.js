import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'tech-career-landing.html');
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'attachment; filename="tech-career-landing.html"',
    },
  });
}
