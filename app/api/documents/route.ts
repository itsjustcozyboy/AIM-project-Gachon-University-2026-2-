import { readFile } from 'node:fs/promises';
import path from 'node:path';
const documents: Record<string, string> = {
  dataset: 'data/personal-career-dataset.md',
  codex: 'agents/results/codex/2026-10-17-week2-report.md',
  gemini: 'agents/results/gemini/2026-10-17-week2-report.md',
  review: 'agents/cross-review/2026-10-17-codex-gemini-week2.md',
  gaps: 'research/week2-skill-gap-matrix.md',
  market: 'research/week2-market-evidence.md',
  midterm: 'reports/week2-midterm-summary.md',
};
export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get('name') || '';
  if (!Object.hasOwn(documents, name)) return new Response('Document not found', { status: 404 });
  try {
    const content = await readFile(path.join(process.cwd(), documents[name]), 'utf8');
    return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' } });
  } catch { return new Response('Document unavailable', { status: 404 }); }
}
