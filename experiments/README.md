# Career Micro-Experiments

Week 3에서 가설을 현실 행동으로 검증한다. [새 실험 계획과 진행 기록](week3/README.md) 3건을 준비했다. MOIMLOG의 직접 기획·개발은 사용자 확인, 세부 회고·평가와 나머지 두 실험은 미완료다.

1. experiment-template.md를 복사해 고유 ID와 연결 가설을 지정한다.
2. 수행 전에 질문·과제·시간·산출물·성공 기준·Before Score를 기록한다.
3. 수행 후 Result, After Score, Evidence, Interpretation, Decision을 기록한다.
4. 결과를 results/에 저장하고 가설 변경은 hypotheses/hypothesis-history.md에 추가한다.
5. dashboard/career-os.json의 experiments와 연결 가설의 집계 필드를 갱신한다.

추가 실험 예시(미등록): 채용공고 10개 분석, 현직자 인터뷰, UX Research 미니과제, Product Strategy Memo, AI Product Prototype, 2~3시간 직무 Simulation.

Dashboard 실험 데이터 예시 형식:

```typescript
{ id: string, career: string, hypothesis: string,
  status: 'PLANNED' | 'IN PROGRESS' | 'DONE', estimatedTime: string,
  beforeScore: { interest: number | null, confidence: number | null, expectedFit: number | null },
  afterScore: { interest: number | null, flow: number | null, difficulty: number | null, skillFit: number | null, wouldDoAgain: number | null },
  decision: string | null }
```

기존 상세 계획은 `drafts/week3-micro-experiments-unadopted.md`에 미채택 이력으로 보존한다. 현재 계획은 새 요청에 따른 별도 기록이다.
