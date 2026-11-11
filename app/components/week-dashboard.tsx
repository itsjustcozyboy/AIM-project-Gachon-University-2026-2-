'use client';

import { useEffect, useState } from 'react';
import source from '../../dashboard/career-os.json';
import './week-dashboard.css';

const storageKey = 'career-os-checklist-agent-status-v2';
const weeks = [
  { number:'01', name:'나를 이해하기', phase:'ME', state:'완료 · 자료 제약 기록', intro:'경험과 관심을 모아 나를 이해하는 것부터 시작했어요.', points:['프로젝트와 활동 경험을 정리하고 강점·가치관 가설을 세웠어요.', '시작 시점의 진로 인식과 관심을 자기평가로 기록했어요.', 'Codex와 Gemini 분석을 보관했어요. Claude는 이용할 수 없었어요.'], link:'dataset', linkLabel:'나의 경험 기록' },
  { number:'02', name:'가능성을 탐색하기', phase:'EXPLORE', state:'완료 · 자료 제약 기록', intro:'나의 경험이 어떤 직무와 연결되는지 살펴봤어요.', points:['직무와 채용시장 자료를 살펴보고 필요한 역량을 비교했어요.', 'Codex와 Gemini의 관점을 비교해 PM·Product Strategy·HCI 가설을 골랐어요.', 'Gemini 전체 원문은 없고, Codex는 기존 보고서를 재사용했어요.'], link:'review', linkLabel:'진로 탐색 근거' },
  { number:'03', name:'경험으로 확인하기', phase:'TEST', state:'자료 정리 · 일부 미완료', intro:'실제 프로젝트를 돌아보고 사용자 경험 자료를 조사했어요.', points:['MOIMLOG를 직접 기획·개발한 경험을 PM 관점에서 정리했어요.', 'K-뷰티 프로젝트를 Product Strategy 사례로 정리했어요.', '금융 앱의 공개 자료를 조사했어요. 동일 조건 화면 비교와 사전·사후 평가는 남아 있어요.'], link:'week3', linkLabel:'3주차 활동 기록' },
  { number:'04', name:'나의 방향 정하기', phase:'DECIDE_AND_ACT', state:'진로 선택 · 실행은 후속 과제', intro:'4주간의 경험을 바탕으로 앞으로의 방향을 정했어요.', points:['진로 우선순위를 PM, Product Strategy, HCI 순으로 선택했어요.', '겨울방학 PM 인턴 지원을 위한 30일 계획과 분기별 로드맵을 정했어요.', '직무 탐색 → 포트폴리오 정리 → 인턴 지원 → 역량 보완 계획 순으로 실행해요.'], link:'decision', linkLabel:'진로 선택 근거' }
];

export default function WeekDashboard() {
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (value && typeof value === 'object' && !Array.isArray(value)) setOverrides(Object.fromEntries(Object.entries(value).filter(([k, v]) => !k.startsWith('TEST:') && typeof v === 'boolean')));
    } catch { setMessage('저장된 체크를 불러오지 못했어요.'); }
    setLoaded(true);
  }, []);
  function toggle(id: string, done: boolean) {
    const next = { ...overrides, [id]: done };
    setOverrides(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); setMessage('이 브라우저에 저장했어요.'); }
    catch { setMessage('저장하지 못했어요. 기록 내보내기를 이용해 주세요.'); }
  }
  function exportData() {
    const data = { ...source, phases: source.phases.map(phase => {
      const tasks = phase.tasks.map(task => {
        const done = task.status === 'UNAVAILABLE' ? false : overrides[`${phase.id}:${task.id}`] ?? task.done;
        return { ...task, done, status: task.status === 'UNAVAILABLE' ? 'UNAVAILABLE' : done ? 'COMPLETED' : 'PENDING' };
      });
      const available = tasks.filter(task => task.status !== 'UNAVAILABLE');
      const completed = available.filter(task => task.done).length;
      const constrained = available.length < tasks.length || phase.status === 'COMPLETE WITH CONSTRAINT';
      const status = completed === available.length && available.length > 0 ? constrained ? 'COMPLETE WITH CONSTRAINT' : 'DONE' : completed ? 'IN PROGRESS' : 'NOT STARTED';
      return { ...phase, tasks, status };
    }) };
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2) + '\n'], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = 'career-os.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage('기록을 내보냈어요. 저장소에는 자동 반영되지 않아요.');
  }
  return <div className="week-app">
    <header className="week-header"><div className="week-header-inner"><a href="#top" className="week-brand"><span className="week-brand-mark">a</span><span>AIM <b>career</b></span></a><span className="week-header-note">2026 아르테크네 AIM 프로젝트</span><a className="week-header-link" href="/api/documents?name=decision">진로 선택 근거 <span aria-hidden="true">↗</span></a></div></header>
    <main id="top" className="week-main">
      <section className="week-hero"><div className="week-eyebrow"><span /> MY CAREER JOURNEY</div><h1>4주간의 탐색,<br /><span>나만의 방향으로.</span></h1><p>나를 이해하는 것부터 앞으로의 계획까지.<br />한 주씩 쌓아온 기록을 모았어요.</p><div className="week-direction"><div><small>나의 진로 방향</small><strong>PM <i>→</i> Product Strategy <i>→</i> HCI</strong></div><span className="week-direction-icon" aria-hidden="true">↗</span></div></section>
      <section className="week-overview" aria-labelledby="week-title"><div className="week-section-head"><div><span className="week-eyebrow">MY JOURNEY</span><h2 id="week-title">4주간의 기록</h2><p>각 주차를 눌러 자세히 살펴보세요.</p></div><button type="button" onClick={exportData} disabled={!loaded}>기록 내보내기 <span aria-hidden="true">↓</span></button></div>
      <div className="week-list">{weeks.map(week => {
        const phase = source.phases.find(p => p.id === week.phase)!;
        return <details className="week-card" key={week.number} open={week.number === '04' ? true : undefined}>
          <summary><span className="week-icon" aria-hidden="true">{week.number}</span><span className="week-card-title"><span className="week-card-kicker">WEEK {week.number} <i>·</i> {week.phase === 'DECIDE_AND_ACT' ? 'DECIDE & ACT' : week.phase}</span><strong>{week.name}</strong><span>{week.intro}</span></span><span className="week-card-right"><span className="week-status">{week.state}</span><span className="week-chevron" aria-hidden="true">⌄</span></span></summary>
          <div className="week-details"><ul>{week.points.map(point => <li key={point}>{point}</li>)}</ul><a className="week-document" href={`/api/documents?name=${week.link}`} target="_blank" rel="noopener noreferrer">{week.linkLabel} <span aria-hidden="true">↗</span></a>
          <details className="week-tasks"><summary>체크리스트 보기 <span aria-hidden="true">⌄</span></summary><div>{phase.tasks.map(task => <label key={task.id}><input type="checkbox" disabled={!loaded || task.status === 'UNAVAILABLE'} checked={task.status === 'UNAVAILABLE' ? false : overrides[`${phase.id}:${task.id}`] ?? task.done} onChange={e => toggle(`${phase.id}:${task.id}`, e.target.checked)} /><span>{task.label}{task.status === 'UNAVAILABLE' && <small> · 이용 불가</small>}</span></label>)}</div></details></div>
        </details>;
      })}</div><p className="week-save-note" role="status">{message || '체크는 이 브라우저에 저장돼요. 다른 기기와 자동 동기화되지 않아요.'}</p></section>
      <section className="week-next"><div><span className="week-eyebrow">NEXT STEP</span><h2>이제, 나의 속도로.</h2><p>선택한 방향을 바탕으로 다음 한 걸음을 준비해요.<br />겨울방학 PM 인턴 준비부터 시작해요.</p></div><div className="week-next-links"><a href="/api/documents?name=thirty" target="_blank" rel="noopener noreferrer">다음 30일 계획 <span>↗</span></a><a href="/api/documents?name=roadmap" target="_blank" rel="noopener noreferrer">12개월 로드맵 <span>↗</span></a></div></section>
      <footer className="week-footer"><span>AIM career</span><span>나를 알아가는 4주간의 기록</span></footer>
    </main>
  </div>;
}
