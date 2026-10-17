import type { Job, JobCategory } from './portfolio-types';

export const JOB_SOURCES = [{ board: 'figma', company: 'Figma' }, { board: 'anthropic', company: 'Anthropic' }];
export function categorizeJob(title: string): JobCategory | null {
  if (/product manager|product management|product owner/i.test(title)) return 'Product';
  if (/strategy|business operations|bizops|strategic (planning|operations)/i.test(title)) return 'Strategy';
  if (/ux research|user research|design research|human.computer|human.ai|research (scientist|engineer|intern)/i.test(title)) return 'Research';
  if (/solutions? architect|solutions? engineer/i.test(title)) return 'Solutions';
  return null;
}
export function normalizeJobs(payload: unknown, board: string, company: string): Job[] {
  if (!payload || typeof payload !== 'object' || !('jobs' in payload) || !Array.isArray(payload.jobs)) throw new Error('Invalid job board response');
  const seen = new Set<string>();
  return payload.jobs.flatMap((raw: unknown): Job[] => {
    if (!raw || typeof raw !== 'object') return [];
    const r = raw as Record<string, unknown>;
    if (typeof r.id !== 'number' || typeof r.title !== 'string' || typeof r.absolute_url !== 'string') return [];
    const category = categorizeJob(r.title);
    if (!category) return [];
    let url: URL;
    try { url = new URL(r.absolute_url); } catch { return []; }
    if (url.protocol !== 'https:' || !(url.hostname === 'greenhouse.io' || url.hostname.endsWith('.greenhouse.io') || url.hostname === 'figma.com' || url.hostname.endsWith('.figma.com') || url.hostname === 'anthropic.com' || url.hostname.endsWith('.anthropic.com'))) return [];
    const id = `${board}:${r.id}`;
    if (seen.has(id)) return [];
    seen.add(id);
    const location = r.location && typeof r.location === 'object' && 'name' in r.location && typeof r.location.name === 'string' ? r.location.name : '위치 원문 확인';
    return [{ id, title: r.title, company, location, url: url.href, category, updatedAt: typeof r.updated_at === 'string' && Number.isFinite(Date.parse(r.updated_at)) ? r.updated_at : null, earlyCareer: /intern|early career|associate|new grad|university/i.test(r.title) }];
  });
}
