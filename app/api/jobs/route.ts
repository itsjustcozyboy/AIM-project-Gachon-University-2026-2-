import { NextResponse } from 'next/server';
import { JOB_SOURCES, normalizeJobs } from '../../../lib/jobs';
import type { JobFeed } from '../../../lib/portfolio-types';

export const dynamic = 'force-dynamic';
export async function GET() {
  const results = await Promise.allSettled(JOB_SOURCES.map(async ({ board, company }) => {
    const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/${board}/jobs`, { cache: 'no-store', signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error(`Job board returned ${response.status}`);
    return { jobs: normalizeJobs(await response.json(), board, company), company, checkedAt: new Date().toISOString() };
  }));
  const feed: JobFeed = { jobs: [], sources: [], fetchedAt: new Date().toISOString(), refreshMinutes: 10 };
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      feed.jobs.push(...result.value.jobs);
      feed.sources.push({ company: result.value.company, status: 'ok', checkedAt: result.value.checkedAt, count: result.value.jobs.length });
    } else feed.sources.push({ company: JOB_SOURCES[i].company, status: 'error', checkedAt: feed.fetchedAt, count: 0 });
  });
  feed.jobs.sort((a, b) => Number(b.earlyCareer) - Number(a.earlyCareer) || a.company.localeCompare(b.company) || a.title.localeCompare(b.title));
  return NextResponse.json(feed, { status: feed.sources.every(s => s.status === 'error') ? 503 : 200, headers: { 'Cache-Control': 'no-store' } });
}
