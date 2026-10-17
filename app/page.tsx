'use client';

import { useEffect, useState } from 'react';
import source from '../dashboard/career-os.json';

type Scores = Record<string, number | null>;
type Experiment = { id: string; career: string; hypothesis: string; status: 'PLANNED' | 'IN PROGRESS' | 'DONE'; estimatedTime: string; beforeScore: Scores; afterScore: Scores; decision: string | null };
const storageKey = 'career-os-checklist-agent-status-v2';
const score = (value: number | null) => value === null ? 'Not measured' : `${value} / 10`;
const scoreList = (values: Scores) => Object.entries(values).map(([name, value]) => `${name}: ${score(value)}`).join(' · ');

export default function Dashboard() {
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        setOverrides(Object.fromEntries(Object.entries(value).filter(([, v]) => typeof v === 'boolean')));
      }
    } catch { setMessage('저장된 체크리스트를 불러오지 못했습니다. 기본 데이터를 표시합니다.'); }
    setLoaded(true);
  }, []);
  function toggle(id: string, done: boolean) {
    const next = { ...overrides, [id]: done };
    setOverrides(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); setMessage('이 브라우저에 저장했습니다.'); }
    catch { setMessage('브라우저 저장에 실패했습니다. 내보내기로 변경을 보관하세요.'); }
  }
  const phases = source.phases.map(phase => {
    const tasks = phase.tasks.map(task => {
      const done = task.status === 'UNAVAILABLE' ? false : overrides[`${phase.id}:${task.id}`] ?? task.done;
      return { ...task, done, status: task.status === 'UNAVAILABLE' ? 'UNAVAILABLE' : done ? 'COMPLETED' : 'PENDING' };
    });
    const count = tasks.filter(task => task.done).length;
    const availableCount = tasks.filter(task => task.status !== 'UNAVAILABLE').length;
    const constrained = availableCount < tasks.length || phase.status === 'COMPLETE WITH CONSTRAINT';
    return { ...phase, tasks, count, availableCount, progress: availableCount ? Math.round(count / availableCount * 100) : 0, status: count === availableCount && availableCount > 0 ? constrained ? 'COMPLETE WITH CONSTRAINT' : 'DONE' : count ? 'IN PROGRESS' : 'NOT STARTED' };
  });
  const completed = phases.reduce((sum, phase) => sum + phase.count, 0);
  const total = phases.reduce((sum, phase) => sum + phase.availableCount, 0);
  const experiments: Experiment[] = source.experiments;
  function exportData() {
    const blob = new Blob([JSON.stringify({ ...source, phases: phases.map(({ count, availableCount, progress, ...phase }) => phase) }, null, 2) + '\n'], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'career-os.json'; link.click(); URL.revokeObjectURL(url);
    setMessage('내보낸 JSON을 dashboard/career-os.json에 반영하면 저장소에도 보관됩니다.');
  }
  return <div className="shell">
    <aside><a className="brand" href="#overview"><span className="brand-mark">C</span> Career OS<span className="version">v1.0</span></a><div className="nav-label">WORKSPACE</div><nav aria-label="Dashboard 탐색">{[['overview', 'Overview'], ['checklist', 'Action checklist'], ['hypotheses', 'Career hypotheses'], ['baseline', 'Career baseline'], ['experiments', 'Experiments']].map(([id, label]) => <a key={id} href={`#${id}`}>{label}<span>↗</span></a>)}</nav><div className="sidebar-note"><span className="dot"/> WEEK 2 · EXPLORE<p>생각을 데이터로,<br/>가설을 행동으로.</p><small>Human Behavior × Product × AI × Business</small></div></aside>
    <main id="overview"><header><span>MY CAREER WORKSPACE</span><span className="tag">Week 2 · {source.crossReview.status}</span></header>
      <section className="intro"><div><p className="eyebrow">BUILD YOUR OWN DIRECTION</p><h1>Career Action Dashboard</h1><p className="muted">정답을 서두르지 않고, 나에게 맞는 방향을 검증하는 공간.</p></div><button onClick={exportData} disabled={!loaded}>데이터 내보내기 ↓</button></section>
      <section className="north-star"><div className="eyebrow">OUR NORTH STAR</div><p>나에게 적합한 직무를 생각만으로 결정하지 않고<br/><strong>데이터 → AI 분석 → 현실 실험</strong>을 통해 검증한다.</p><span className="orbit" aria-hidden="true">↗</span></section>
      <section className="stats" aria-label="현재 현황"><div><span>전체 체크리스트</span><strong>{Math.round(completed / total * 100)}<small>%</small></strong><small>{completed} / {total} tasks complete</small></div><div><span>Career hypotheses</span><strong>{source.week2.selectedHypotheses.length.toString().padStart(2, '0')}</strong><small>Week 2 선정 · 모두 미검증</small></div><div><span>Experiments</span><strong>{experiments.length.toString().padStart(2, '0')}</strong><small>Week 3 미착수 · 등록 없음</small></div><div><span>Baseline</span><strong>{source.baseline.filter(m => m.t0 !== null).length}<small> / 8</small></strong><small>T0 · 2026-10-16 입력 완료</small></div></section>
      <section className="panel" id="progress"><div className="section-title"><h2>Project journey</h2><span className="muted">4 weeks · 하나의 반복 가능한 시스템</span></div><div className="phases">{phases.map((phase, i) => <article key={phase.id} className={i === 1 ? 'current' : ''}><div className="phase-top"><span>WEEK 0{i + 1}</span><span className="status">{phase.status}</span></div><h3>{phase.label}</h3><div className="progress"><div style={{ width: `${phase.progress}%` }}/></div><small>{phase.progress}% · {phase.count}/{phase.availableCount} executable tasks</small></article>)}</div><p className="footnote">진행률은 실행 가능한 계획 기준입니다. Week 1 원계획: {phases[0].count}/{phases[0].tasks.length} ({(phases[0].count / phases[0].tasks.length * 100).toFixed(1)}%). 수정계획: {phases[0].count}/{phases[0].availableCount} ({phases[0].progress}%). Claude Code는 구독 제약으로 UNAVAILABLE이며 완료에 포함하지 않습니다.</p></section>
      <section className="panel" id="checklist"><div className="section-title"><div><p className="eyebrow">START WITH YOURSELF</p><h2>Week 1 — ME checklist</h2></div><span className="tag">{phases[0].count} / {phases[0].availableCount} executable tasks complete</span></div><div className="checklist">{phases[0].tasks.map(task => <label key={task.id} className={task.done ? 'done' : ''}><input type="checkbox" checked={task.done} disabled={!loaded || task.status === 'UNAVAILABLE'} onChange={event => toggle(`ME:${task.id}`, event.target.checked)}/><span>{task.label}{task.status === 'UNAVAILABLE' && <small> · UNAVAILABLE — {task.reason}</small>}</span></label>)}</div><p className="footnote">체크 변경은 이 브라우저에 저장됩니다. 저장소 반영은 JSON 내보내기 후 파일을 갱신하세요. 완료 표시가 보고서나 자기평가를 생성하지는 않습니다.</p><p className="save-message" role="status">{message}</p></section>
      <section className="panel" id="week2"><div className="section-title"><h2>Week 2 — EXPLORE</h2><span className="tag">{source.week2.status}</span></div>{source.phases[1].tasks.map(task => <p key={task.id}>✓ {task.label} · {task.status}</p>)}<p>선정 가설: AI PM · Product Strategy · HCI</p><p className="footnote">Week 2 조사·비교·가설 선정 완료. Week 3 실험 설계·실행 및 Week 4 결정·로드맵은 미착수입니다.</p></section>
      <section className="panel" id="agents"><div className="section-title"><h2>Week 2 Agent status</h2><span className="tag">Cross Review · {source.crossReview.status}</span></div>{Object.entries(source.week2.agents).map(([name, agent]) => <p key={name}><strong>{name}</strong> · {agent.status}</p>)}<p className="footnote">Codex 기존 독립 보고서와 사용자가 수용한 Gemini 전달 결과를 비교했습니다. Gemini 전체 원문은 미보관이며 Claude는 구독 제한으로 제외했습니다.</p></section>
      <section id="hypotheses"><div className="section-title"><div><p className="eyebrow">POSSIBILITIES, WAITING FOR EVIDENCE</p><h2>Career hypotheses</h2></div><span className="muted">순위 없는 검증 가설</span></div><div className="hypotheses">{source.hypotheses.map(h => <article className="panel hypothesis" key={h.id}><div className="section-title"><span className="hyp-id">{h.id}</span><span className="tag">{h.status}</span></div><h3>{h.career}</h3><p>{h.hypothesis}</p><dl><div><dt>Score</dt><dd>{h.score === null ? 'Not measured' : `${h.score} / 100`}</dd></div><div><dt>Confidence</dt><dd>{h.confidence ?? 'UNKNOWN'}</dd></div></dl><footer><span>Evidence <b>{h.evidenceCount}</b></span><span>Experiments <b>{h.experimentCount}</b></span></footer></article>)}</div></section>
      <section className="panel" id="baseline"><div className="section-title"><div><p className="eyebrow">YOUR STARTING POINT</p><h2>Career baseline</h2></div><span className="tag">T0 → T1</span></div><p className="muted">같은 질문으로 시작과 종료를 비교합니다. 모든 항목은 1~10점입니다.</p><div className="baseline-head"><span>METRIC</span><span>T0 · BEFORE</span><span>T1 · AFTER</span></div>{source.baseline.map(metric => <div key={metric.id} className="baseline-row"><div><strong>{metric.metric}</strong><p>{metric.question}</p>{!metric.higherIsBetter && <small className="anxiety">높을수록 불안이 큼 · 낮아지는 방향이 개선</small>}</div><span>{score(metric.t0)}</span><span>{score(metric.t1)}</span></div>)}<p className="footnote">사용자가 data/career-baseline.yaml에 직접 평가한 뒤 dashboard/career-os.json의 동일 지표에 반영합니다.</p></section>
      <section className="panel" id="experiments"><div className="section-title"><div><p className="eyebrow">LEARN BY DOING</p><h2>Career experiments</h2></div><span className="tag">{experiments.length} registered</span></div>{experiments.length === 0 ? <div className="empty"><span aria-hidden="true">⌁</span><h3>아직 등록된 실험이 없습니다</h3><p>Week 2에서 가설 W2-H1·H3·H4를 선정했습니다. Week 3 설계·실행은 아직 시작하지 않았습니다.</p><small>experiments/experiment-template.md로 첫 실험을 준비하세요.</small></div> : <div className="experiment-list">{experiments.map(ex => <article key={ex.id}><h3>{ex.id} · {ex.career}</h3><p>Hypothesis: {ex.hypothesis}</p><p>{ex.status} · {ex.estimatedTime}</p><p>Before: {scoreList(ex.beforeScore)}</p><p>After: {scoreList(ex.afterScore)}</p><p>Decision: {ex.decision ?? 'UNKNOWN'}</p></article>)}</div>}</section>
      <footer className="page-footer"><span>Career OS · Personal research workspace</span><span>DATA → HYPOTHESIS → EVIDENCE → EXPERIMENT → REFLECTION → DECISION → ACTION</span></footer>
    </main>
  </div>;
}
