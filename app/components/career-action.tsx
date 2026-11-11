'use client';
import { useEffect, useState } from 'react';

const key = 'career-os-action-week4-v1';
const months = [
 ['01','사례와 공고','MOIMLOG 사례 검토 · 공고 3건 비교'],['02','제품 평가','지표·AI 오류·비용 가정'],['03','전략 근거','K-뷰티 고객과 전략 사례'],
 ['04','검증 설계','질문·동의·기준 준비'],['05','관찰','가능한 범위의 피드백'],['06','반복 개선','근거를 반영한 수정'],
 ['07','분석 기초','SQL 집계와 통계 복습'],['08','포트폴리오','사례 1개와 근거'],['09','글로벌 준비','영문 소개와 해외 자격'],
 ['10','기회 탐색','공고·요건·학업 일정'],['11','역량 보완','우선 학습과 결과물'],['12','회고와 선택','12개월 회고와 다음 계획']
];
const tasks = [
 {id:'w1',week:'1주',text:'가능 시간과 MOIMLOG 사례의 실제 기여 확인'},
 {id:'w2',week:'2주',text:'K-뷰티 고객과 실제 전략 선택 검토'},
 {id:'w3',week:'3주',text:'국내외 공고 3건의 업무와 자격 비교'},
 {id:'w4',week:'4주',text:'사례 수정과 30일 회고'}
];
type ActionState = { done: Record<string, boolean>; notes: Record<string, string> };
const empty: ActionState = {done:{}, notes:{}};
export default function CareerAction() {
 const [state,setState] = useState<ActionState>(empty);
 const [loaded,setLoaded] = useState(false);
 const [message,setMessage] = useState('');
 useEffect(()=>{try { const raw=localStorage.getItem(key); if(raw){const parsed=JSON.parse(raw); if(parsed && typeof parsed.done==='object' && typeof parsed.notes==='object') setState(parsed);} } catch {setMessage('저장된 기록을 읽지 못했습니다.');} setLoaded(true);},[]);
 function update(next:ActionState){setState(next); try{localStorage.setItem(key,JSON.stringify(next));setMessage('이 브라우저에 저장했습니다.');}catch{setMessage('브라우저 저장에 실패했습니다. 내보내기로 보관하세요.');}}
 function exportAction(){const blob=new Blob([JSON.stringify({schemaVersion:1,exportedAt:new Date().toISOString(),...state},null,2)+'\n'],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='career-action-records.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 const completed=tasks.filter(t=>state.done[t.id]).length;
 return <section id="action" className="content-section action-section">
  <div className="section-heading"><div><span className="eyebrow">06 / DECIDE & ACT</span><h2>선택을 행동으로 연결하기<span>.</span></h2></div><button className="text-button" onClick={exportAction} disabled={!loaded}>실행 기록 내보내기 ↓</button></div>
  <div className="action-intro">
   <span className="action-label">MY DIRECTION</span>
   <h3>나의 진로 방향</h3>
   <div className="action-priorities"><span><b>01</b> PM</span><span><b>02</b> Product Strategy</span><span><b>03</b> HCI</span></div>
   <p>지난 4주간 정리한 경험을 바탕으로 선택한 우선순위입니다.</p>
   <div className="document-links"><a href="/api/documents?name=decision" target="_blank" rel="noopener noreferrer">선택 근거 ↗</a><a href="/api/documents?name=final" target="_blank" rel="noopener noreferrer">최종 보고서 ↗</a><a href="/api/documents?name=roadmap" target="_blank" rel="noopener noreferrer">로드맵 문서 ↗</a><a href="/api/documents?name=thirty" target="_blank" rel="noopener noreferrer">30일 계획 ↗</a></div>
  </div>
  <div className="action-checklist">
   <div className="action-checklist-heading"><div><span className="action-label">NEXT 30 DAYS</span><h3>이번 달, 하나씩</h3><p>일정과 목표는 상황에 맞게 조정해 주세요.</p></div><div className="action-count"><strong>{completed}</strong><span> / {tasks.length} 완료</span></div></div>
   <div className="progress-track" role="progressbar" aria-label="주간 체크리스트 진행률" aria-valuemin={0} aria-valuemax={tasks.length} aria-valuenow={completed}><span style={{width:`${completed/tasks.length*100}%`}} /></div>
   <div className="action-tasks">{tasks.map(t=><div className="action-task" key={t.id}><label><input type="checkbox" disabled={!loaded} checked={!!state.done[t.id]} onChange={e=>update({...state,done:{...state.done,[t.id]:e.target.checked}})} /> <strong>{t.week}</strong> {t.text}</label><label className="action-note">완료 근거 또는 회고<input type="text" disabled={!loaded} value={state.notes[t.id]||''} onChange={e=>update({...state,notes:{...state.notes,[t.id]:e.target.value}})} placeholder="짧게 기록해 보세요" /></label></div>)}</div>
   <p className="action-footnote">진척률은 체크한 주간 항목 수를 기준으로 계산합니다.</p>
  </div>
  <details className="action-roadmap"><summary><span><span className="action-label">LOOKING AHEAD</span><strong>12개월 로드맵</strong><small>월별 계획 보기 · 일정 미확정</small></span><span aria-hidden="true">＋</span></summary><div className="action-months">{months.map(([id,title,body])=><article key={id}><span>MONTH {id}</span><strong>{title}</strong><p>{body}</p></article>)}</div></details>
  <p className="context-note">체크와 근거는 이 브라우저에만 저장되며 기기 간 자동 동기화되지 않습니다. 내보내기 파일을 보관하세요. 저장소 문서와도 자동 동기화되지 않습니다. 시간·학기 일정과 HCI 비교는 확인이 필요합니다.</p><p role="status" className="save-message">{message}</p>
 </section>;
}
