# Dashboard data

`career-os.json`은 Dashboard 표시용 데이터다. `app/page.tsx`가 읽는다.

- phases: ID / label / status / tasks[]. 각 task는 id / label / done / status / reason. status: PENDING / COMPLETED / UNAVAILABLE. UNAVAILABLE은 done=false이며 체크 불가.
- 가시적 status·progress는 체크리스트에서 자동 계산한다. UNAVAILABLE은 수정계획 분모에서 제외하되 원계획 달성도에 남긴다. 전부 완료되고 제약이 있으면 COMPLETE WITH CONSTRAINT. Week 2~4의 작업은 최소 마일스톤 초안이며 추후 확장한다.
- hypotheses: id / career / hypothesis / score(null 또는 0~100) / confidence(null 또는 HIGH·MEDIUM·LOW) / status / evidenceCount / experimentCount.
- baseline: id / metric / question / t0 / t1 (null 또는 1~10) / higherIsBetter.
- experiments: 초기 빈 배열. 필드 정의는 experiments/README.md 참조.

## 갱신 절차

1. 사용자 직접 입력과 실제 근거를 먼저 data/, hypotheses/, experiments/에 기록한다.
2. 동일 내용을 JSON에 반영한다. Baseline의 metric ID를 유지한다.
3. 가설의 근거·실험 건수는 연결된 실제 기록만 집계한다. 미등록 실험은 만들지 않는다.
4. 중요 변경은 이력에 추가하고 build를 확인한다.

체크리스트는 브라우저 localStorage로 저장된다. 내보내기는 체크 변경이 반영된 전체 JSON을 다운로드한다. 저장소로 자동 전송하지 않는다.
새 JSON을 repository 파일에 반영한 뒤 브라우저 저장소의 career-os-checklist-agent-status-v2 키를 지우면 새 파일 기본값을 확인할 수 있다.

초기 가설 status는 NEW. 이후 EXPLORING / TESTING / SUPPORTED / WEAKENED / REJECTED로 갱신 가능.
실험 status는 PLANNED / IN PROGRESS / DONE.

## Agent 실행 상태

`agents`에 PENDING / COMPLETED / UNAVAILABLE과 결과 경로·사유·원문 보관 여부를 기록한다. `agentReports`는 실제 보관 파일만 가리킨다. Gemini Summary JSON은 사용자 승인으로 유효 결과이며 원문은 NOT STORED. Claude는 UNAVAILABLE이며 실행 완료에 포함하지 않는다. `week1Achievement`는 원계획 12/13, 수정계획 12/12를 보존한다. `crossReview`는 Codex + Gemini의 REVIEWED WITH CONSTRAINTS 상태다. reports/week2-cross-review.md에 비교와 제약을 기록했다. 이번 상태 전환은 새 localStorage 키를 사용하며 이전 브라우저 기록을 삭제하지 않는다.

2026-10-17 당시 점검 이력(현재 해소됨): 새 Week 2 원문 기반 비교는 AWAITING_REQUIRED_REPORTS였다. `week2Import`에 누락 자료를 기록하며 당시 EXPLORE 체크는 PENDING이었다. 현재 완료 상태는 아래 최신 Week 2 상태를 따른다.

## 최신 Week 2 상태

`week2.status`는 COMPLETE WITH CONSTRAINT, `crossReview.status`는 COMPLETED다. 선정 ID는 W2-H1/W2-H3/W2-H4 3개이며 W2-H2는 DEFERRED다. `week2.agents`가 현재 비교 입력을 가리키고 기존 `agents`는 Week 1 결과를 보존한다. `experiments=[]`, 모든 experimentCount=0, TEST·DECIDE_AND_ACT는 NOT STARTED다. 후속 초안은 미채택 이력이며 실험 설계·실행은 현재 범위 밖이다. UI에는 현재 선택 수와 Week 2 완료/자료 제약을 표시한다.
