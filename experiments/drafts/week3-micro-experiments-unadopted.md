<!-- ARCHIVED_UNADOPTED_DRAFT: 사용자 범위 정정으로 미채택. 3주차 착수·실험 등록·확정 아님. -->

# Week 3 — Micro-Experiment Plans

Date: 2026-10-17 | 모두 UNADOPTED DRAFT | 실행·모집·결과·전후 측정 없음
연결: [Cross Review](../../agents/cross-review/2026-10-17-codex-gemini-week2.md).

## 공통 측정·판정

Before와 After에 Interest, Flow, Difficulty, Skill Fit, Direction Confidence, Would Do Again을 각각 1–10으로 기록한다. Before는 예상 흥미·몰입·어려움·수행 적합감·해당 경로 확신·반복 의향이며 After는 같은 질문의 실제 경험/현재 판단이다. 현재 값은 모두 null이다. Difficulty만 높을수록 어려움이며 다른 값과 합산하지 않는다. Baseline T1과 별도의 과제별 측정이다.

완료 기준과 가설 지지 기준을 구분한다. 산출물과 한계를 남겼다면 성과 개선이 없어도 실험 완료가 가능하다. 산출물 검토 항목: 문제/주장 명확성, 근거와 주장 연결, 대안·반대 근거, 한계의 구체성. 각 항목 0=없음, 1=부분, 2=명확의 임시 rubric으로 자기 검토하고 가능하면 동의한 동료 검토를 추가한다. 동료가 없으면 외부 검증 미수행으로 기록한다.

임시 Decision Rule: 완료·rubric 4항목 모두 1 이상·After Interest/Flow/Would Do Again 모두 7 이상이면 Strengthen을 후속 후보로 제안. 완료했으나 Interest와 Would Do Again 모두 4 이하라면 Weaken을 제안. 그 외는 Maintain/추가 관찰. 어려움이 높으면 배경지식·자료·도구·시간 부족을 함께 검토하며 낮은 수행을 진로 부적합으로 확정하지 않는다. 경계값은 검증된 척도가 아니며 한 과제로 Reject/최종 직무 결정하지 않는다. 점수 변화·확신 상승은 채용 가능성 증거가 아니다.

세 과제 모두 마친 뒤 실제 시간·몰입·재수행 의향과 산출물 검토를 비교해 다음에 반복할 업무를 고른다. 과제 난이도·도메인 친숙도·순서 효과가 다르므로 총점 순위나 통계적 우위를 만들지 않는다. 가능하면 과제 순서를 무작위로 정하고 기록한다.

## EX-W3-01 — AI PM

Career Hypothesis: W2-H1. 기존 AI workflow의 문제정의·요구·평가·재수정을 반복하고 싶을 수 있다.
Question: 새로운 기능을 만드는 흥미가 제품의 평가·운영 책임에서도 이어지는가?
Duration: 총 4시간, 두 세션 각 2시간. 일정을 아직 지정하지 않음.

Task:

1. Before 10분. K-Beauty 또는 비민감 생산성 workflow 1개를 정하고 사용자·문제·수동 대안·본인 역할을 기록한다(20분).
2. 2쪽 이내 PRD: 범위·포기할 대안·성공 지표·실패/수동 전환·비용 상한·책임을 쓴다(45분).
3. 고정 입력 5개·기대 결과·실패 기준을 정의하고 현재 workflow를 평가한다(45분). 실행이 안 되면 이를 기록하고 평가 설계까지만 남겨 결과 판정은 보류한다.
4. 다음 세션에 오류 한 종류를 수정한다(50분). 구현 불가면 원인·필요 기술을 분리하고 가짜 개선치를 만들지 않는다.
5. 같은 입력 5개로 재평가하고 시간·비용·남은 오류를 기록한다(35분). 가능하면 동료가 PRD의 주장·대안·한계를 검토한다(20분; 불가 시 자기 검토로 대체하고 표시).
6. After와 다음 유지보수 항목·Decision을 기록한다(15분).

Concrete Output: PRD, 입력/예상/관찰 표, 수정 기록, 평가 전후 오류·시간·비용, 다음 운영 항목. 원래 성능·금액을 모르면 null, synthetic 입력은 명시한다.
Before Metrics: 공통 6항목 null.
Success Criteria: PRD와 평가 기준, 가능한 경우 실제 전후 평가, 남은 실패 최소 1개와 대안 기록. 실험 준비만 했으면 실제 수정 업무에 대한 판단은 보류.
After Metrics: 공통 6항목 null.
Decision Rule: 공통 기준+빌딩/평가/반복 수정 중 무엇을 다시 하고 싶은지 비교. 문서만 완료하고 운영 미수행이면 PRD 업무에 한해서만 해석한다.
Result / Evidence / Decision: null.

## EX-W3-02 — Product Strategy / BizOps

Career Hypothesis: W2-H3. 고객·시장·수익 가정으로 우선순위를 결정하는 사업 분석을 반복하고 싶을 수 있다.
Question: 구현보다 시장·가격·고객·경제성을 비교하며 대안을 포기하는 업무에 몰입하는가?
Duration: 3시간.

Task:

1. Before(10분), 분석할 B2B SaaS와 한 고객군·구매 문제를 선택한다(15분).
2. 공식 가격·제품·공개 고객 자료를 찾아 링크·확인일·사실/가정을 구분한다(35분).
3. TAM/SAM/SOM의 대상·기간·단위를 정의하고 bottom-up 가정과 민감도를 표로 만든다(35분). 분모 자료가 없으면 UNKNOWN으로 두고 필요한 정보·수집 방법을 적는다.
4. 단위당 가치/절감·가격·도입/운영 비용을 구분해 Unit Economics 가정표를 만든다(30분). 추정값은 가정으로 표시하고 실제 고객 매출로 표현하지 않는다.
5. 고객군 2개 또는 GTM 대안 2개 중 선택·포기·반증 조건을 담은 전략 메모 1쪽을 쓴다(25분).
6. rubric 검토·숫자 근거 점검·수정(20분), After·Decision(10분).

Concrete Output: 전략 메모 1쪽, 출처/가정 목록, 시장규모 계산 또는 미확인 자료표, Unit Economics와 민감도 표.
Before Metrics: 공통 6항목 null.
Success Criteria: 선택/포기 대안, 최소 1개 검증 가능한 공식 출처, 산식의 단위·가정·한계와 반대 근거 기록. 모르는 숫자를 만들지 않는 것도 유효 산출물이다.
After Metrics: 공통 6항목 null.
Decision Rule: 공통 기준+분석과 수치 검증을 다시 하고 싶은지, 글 작성만 선호했는지 구분. GTM 메모 한 번으로 전략 직무 역량을 입증하지 않는다. SQL 숙련도는 이 과제로 확정하지 않는다.
Result / Evidence / Decision: null.

## EX-W3-03 — HCI / Human-AI Interaction

Career Hypothesis: W2-H4. 논문의 방법을 비평하고 검증 가능한 연구를 재설계하는 일을 반복하고 싶을 수 있다.
Question: 심리와 AI라는 주제 관심이 문헌·방법·통계·연구 엄밀성 작업에도 이어지는가?
Duration: 3시간.

Task:

1. Before(10분), 공개 원문에 접근 가능한 Human-AI Interaction 논문 1편을 선택하고 제목·저자·URL을 기록한다(15분). 이번 계획에서는 읽은 논문을 지정하거나 읽었다고 주장하지 않는다.
2. 질문·방법·표본·측정·결과·저자 한계를 분리해 정리한다(45분).
3. 인과 주장 가능 범위, 대조조건·교란·표집·분석 한계를 비평한다(30분).
4. Research Proposal 1–2쪽: 연구 질문·독립/종속변수·대조·표본 선정·분석계획·반증 조건·윤리·예상 한계를 쓴다(45분). 사람 대상 실험은 수행하지 않는다.
5. 주장과 원문 일치·가설 검증 가능성 rubric 검토와 수정(25분), After·Decision(10분).

Concrete Output: 원문 링크와 방법 비평, Proposal, 필요한 통계/방법 학습 항목. 가상의 결과·참여자 데이터 없음.
Before Metrics: 공통 6항목 null.
Success Criteria: 방법에 근거한 한계와 반증 가능한 질문·변수·분석계획 각 1개 이상. 논문 접근 실패 시 다른 공개 원문을 찾고 전체 시간 내 불가하면 미완료·자료 접근 이유 기록.
After Metrics: 공통 6항목 null.
Decision Rule: 공통 기준+논문 주제 흥미와 방법 작업 몰입을 분리. 높은 재수행 의향이면 학부 연구 참여 등 다음 작은 과제 검토. 학위·취업 적합성 확정 불가.
Result / Evidence / Decision: null.
