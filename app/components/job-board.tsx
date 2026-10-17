'use client';
import { useEffect, useState } from 'react';
import type { JobFeed } from '../../lib/portfolio-types';
const categories = ['전체', 'Product', 'Strategy', 'Research', 'Solutions'];
const dateTime = (value: string) => new Date(value).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });

export default function JobBoard({ category, onCategory }: { category: string; onCategory: (value: string) => void }) {
  const [feed, setFeed] = useState<JobFeed | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [early, setEarly] = useState(false);
  const [limit, setLimit] = useState(6);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    let running = false;
    async function load() {
      if (running) return;
      running = true;
      setLoading(true);
      setError('');
      try {
        const response = await fetch('/api/jobs', { cache: 'no-store', signal: controller.signal });
        const result = await response.json() as JobFeed;
        if (!Array.isArray(result.jobs) || !Array.isArray(result.sources)) throw new Error('Invalid feed');
        if (!response.ok) throw new Error('Feed unavailable');
        if (active) { setFeed(result); setLimit(6); }
      } catch {
        if (active && !controller.signal.aborted) setError('공고를 갱신하지 못했어요. 공식 채용 페이지에서 직접 확인하거나 다시 시도해 주세요.');
      } finally { running = false; if (active) setLoading(false); }
    }
    void load();
    const timer = setInterval(() => { if (document.visibilityState === 'visible') void load(); }, 10 * 60 * 1000);
    return () => { active = false; controller.abort(); clearInterval(timer); };
  }, [refresh]);
  const filtered = (feed?.jobs || []).filter(job => (category === '전체' || job.category === category) && (!early || job.earlyCareer) && `${job.title} ${job.company} ${job.location}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="jobs-panel">
    <div className="jobs-toolbar"><div><span className={`live-indicator ${error ? 'offline' : ''}`} /><strong>공개 채용 보드</strong><span className="subtle">Figma · Anthropic</span></div><button className="text-button" onClick={() => setRefresh(v => v + 1)} disabled={loading}>{loading ? '불러오는 중…' : '새로고침 ↻'}</button></div>
    <div className="jobs-controls"><div className="pills" aria-label="공고 직무 필터">{categories.map(value => <button key={value} className={category === value ? 'active' : ''} aria-pressed={category === value} onClick={() => { onCategory(value); setLimit(6); }}>{value}</button>)}</div><label className="job-search"><span aria-hidden="true">⌕</span><input aria-label="공고 제목, 기업, 지역 검색" placeholder="직무, 기업, 지역 검색" value={query} onChange={e => { setQuery(e.target.value); setLimit(6); }} /></label></div>
    <div className="job-meta"><label><input type="checkbox" checked={early} onChange={e => { setEarly(e.target.checked); setLimit(6); }} /> 인턴·Early career 키워드만</label><span aria-live="polite">{feed ? `${filtered.length}개 관련 공고` : '응답 대기'}</span></div>
    {error && <p className="feed-warning" role="status">{error}{feed && ' 아래는 마지막으로 불러온 결과입니다.'}</p>}
    {feed?.sources.some(s => s.status === 'error') && <p className="feed-warning">{feed.sources.filter(s => s.status === 'error').map(s => s.company).join(', ')} 연결 실패 · 응답한 기업의 공고만 표시합니다.</p>}
    <div className="job-list" aria-busy={loading}>
      {loading && !feed && <div className="feed-empty"><span className="loading-ring" />기업의 채용 보드에서 공고를 가져오고 있어요.</div>}
      {!loading && filtered.length === 0 && <div className="feed-empty">{error ? '현재 자동 공고를 표시할 수 없어요.' : '현재 필터에 맞는 공고가 없어요.'}<small>다른 필터를 선택하거나 아래 공식 채용 페이지에서 더 찾아보세요.</small></div>}
      {filtered.slice(0, limit).map(job => <a className="job-row" href={job.url} key={job.id} target="_blank" rel="noopener noreferrer"><span className={`company-avatar ${job.company.toLowerCase()}`}>{job.company === 'Figma' ? 'F' : 'A'}</span><div className="job-main"><span className="job-company">{job.company} <span>· {job.category}</span>{job.earlyCareer && <b>Early career 키워드</b>}</span><h3>{job.title}</h3><p>{job.location}{job.updatedAt && <span> · 공고 수정 {new Date(job.updatedAt).toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' })}</span>}</p></div><span className="job-arrow" aria-label="공고 원문 새 탭에서 열기">↗</span></a>)}
    </div>
    {filtered.length > limit && <button className="load-more" onClick={() => setLimit(n => n + 6)}>공고 더 보기 <span>+{Math.min(6, filtered.length - limit)}</span></button>}
    <div className="feed-footer"><span>{feed ? `마지막 수신 ${dateTime(feed.fetchedAt)} KST` : '수신한 공고 없음'} · 화면을 열어둔 동안 10분마다 갱신</span><small>공개 API에 노출된 공고입니다. Research에는 기술 연구직도 포함됩니다. 마감·지원 자격·비자는 원문에서 확인하세요. 키워드 분류는 적합성 평가가 아닙니다.</small></div>
  </div>;
}
