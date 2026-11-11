import { readFile } from 'node:fs/promises';
import path from 'node:path';
const documents: Record<string, string> = {
 dataset: 'weeks/week1.md', review: 'weeks/week2.md', week3: 'weeks/week3.md',
 decision: 'reports/week4-career-decision.md', roadmap: 'weeks/week4.md',
 thirty: 'weeks/week4.md',
};
export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get('name') || '';
  if (!Object.hasOwn(documents, name)) return new Response('Document not found', { status: 404 });
  try {
    const content = await readFile(path.join(process.cwd(), documents[name]), 'utf8');
    return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' } });
  } catch { return new Response('Document unavailable', { status: 404 }); }
}
