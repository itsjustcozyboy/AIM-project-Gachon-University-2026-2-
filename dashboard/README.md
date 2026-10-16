# Dashboard data

`career-os.json`은 Dashboard 표시용 데이터다. `app/page.tsx`가 읽는다.

- phases: ID / label / status / tasks[]. 각 task는 id / label / done.
- 가시적 status·progress는 체크리스트에서 자동 계산한다. Week 2~4의 작업은 최소 마일스톤 초안이며 추후 확장한다.
- hypotheses: id / career / hypothesis / score(null 또는 0~100) / confidence(null 또는 HIGH·MEDIUM·LOW) / status / evidenceCount / experimentCount.
- baseline: id / metric / question / t0 / t1 (null 또는 1~10) / higherIsBetter.
- experiments: 초기 빈 배열. 필드 정의는 experiments/README.md 참조.

## 갱신 절차

1. 사용자 직접 입력과 실제 근거를 먼저 data/, hypotheses/, experiments/에 기록한다.
2. 동일 내용을 JSON에 반영한다. Baseline의 metric ID를 유지한다.
3. 가설의 근거·실험 건수는 연결된 실제 기록만 집계한다. 미등록 실험은 만들지 않는다.
4. 중요 변경은 이력에 추가하고 build를 확인한다.

체크리스트는 브라우저 localStorage로 저장된다. 내보내기는 체크 변경이 반영된 전체 JSON을 다운로드한다. 저장소로 자동 전송하지 않는다.
새 JSON을 repository 파일에 반영한 뒤 브라우저 저장소의 career-os-checklist-v1 키를 지우면 새 파일 기본값을 확인할 수 있다.

초기 가설 status는 NEW. 이후 EXPLORING / TESTING / SUPPORTED / WEAKENED / REJECTED로 갱신 가능.
실험 status는 PLANNED / IN PROGRESS / DONE.
