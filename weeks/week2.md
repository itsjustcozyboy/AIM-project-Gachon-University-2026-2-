# Week 2 중간 활동보고서 근거

Date: 2026-10-17 | EXPLORE: COMPLETE WITH CONSTRAINT | Week 3/4: NOT STARTED

## 500자 이내 요약

Personal Career Dataset v1.0을 바탕으로 독립 분석한 Codex와 Gemini의 결과를 보존하고, 실제 직무·채용공고·필요 역량·성장경로를 조사했다. 현재 경험과 요구 역량을 Skill Gap Matrix로 비교하고 후보별 진입 난이도·매력·적합 및 반대 근거를 정리했다. Cross Review에서는 AI PM의 가능성에 대한 공통 판단과 Strategy·HCI·UXR의 우선순위 및 확신 차이를 검토했다. 점수를 평균내지 않고 제품 책임·사업 판단·연구 수행을 구분할 정보 가치를 기준으로 AI PM·Product Strategy·HCI 가설 3개를 선정했다. Claude는 구독 제한으로 제외했다. Gemini는 사용자 전달 결과를 수용했으며 전체 원문 미보관 제약을 기록했다. 3·4주차 활동은 착수하지 않았다.

## 상세 버전

### 조사와 비교 입력

1주차의 Dataset v1.0과 공통 평가 규칙을 사용한 Codex 독립 보고서를 원본 그대로 보존하고 Week 2 비교 입력 사본·해시를 남겼다. 새 독립 실행을 소급 주장하지 않았다. Gemini는 사용자가 전달하고 독립 실행을 확인한 Week 2 결과를 발췌 보관물과 구조화 JSON으로 수용했다. 전체 원문 미보관과 사용자 확인 메타데이터라는 한계는 별도로 표시했다. 원계획의 Claude Code는 기존 구독 제한으로 UNAVAILABLE이므로 수정계획의 두 Agent를 비교했다.

### 직무·시장·현재 역량

AI PM, Product Strategy/BizOps, HCI/Human-AI Interaction, B2B AI Solution Architect, UXR, 창업 및 일반 PM을 검토했다. 사용자 조사·MVP·AI Agent·계약·해외 판매 경험은 직무와 연결되는 자기보고 근거다. 다만 프로젝트 기간·역할·산출물·성과와 SQL·통계·영어·운영 수준은 미확인이다. Skill Gap과 Evidence Gap을 구분해 기존 경험의 문서화만으로 모든 부족이 해소된다고 보지 않았다.

Indeed AI PM 가이드, Stripe 전략 공고, Uxia 연구직 가이드, PepsiCo AI SA의 공식 검색 결과를 확인하고 본문 접근 실패·자료 유형·경력직 표본의 한계를 기록했다. Stripe 공고의 7년 이상 경력 요건은 해당 직무의 증거이며 전체 시장의 진입 조건으로 일반화하지 않았다. 시장 수요 최상위·합격률 3배·단기간 지원 가능·HCI 학위 보편 필수 같은 강한 표현은 미검증으로 남겼다.

### 공통점과 차이

두 Agent는 사람·제품·AI·사업의 접점과 지표·분석·AI 평가·산출물 증거 확보의 필요성에 공통으로 주목했다. Codex는 미평가 항목을 null로 두고 PM/UXR 비교 및 운영 책임 검증을 강조했다. Gemini는 AI PM 89.5, Strategy 85를 제안하며 PRD·Product Analytics와 Market Sizing·Unit Economics를 강조했고, HCI를 장기 특화 가능성으로 보았다. 총점 평균과 Agent 합의의 자동 FACT 승격 없이 근거 수준·반대 근거·자료 공백을 비교했다.

### 선정 가설과 이유

| ID | 현재 선정 가설 | 선정 이유 | 반대 근거 / 미확인 |
|---|---|---|---|
| W2-H1 AI PM | AI workflow의 PRD·평가·재수정을 반복하고 싶을 수 있다 | K-Beauty·자동화와 직접 연결되며 제품 책임 선호를 구분 | 지속 개선·지표·본인 기여 미확인 |
| W2-H3 Product Strategy | 고객·시장·수익 가정으로 도입 우선순위를 판단하는 일을 반복하고 싶을 수 있다 | 시장 탐색·이커머스와 연결되며 사업 분석과 구현 선호를 구분 | 재무·SQL·시장 수치 숙련도와 판단 성과 미확인 |
| W2-H4 HCI | 논문의 방법 비평·연구 재설계를 반복하고 싶을 수 있다 | 심리×기술 관심이 연구 업무에도 이어지는지 구분할 정보 가치 | 문헌·통계·실험 실적 미확인 |

셋 모두 LOW confidence, 점수 null, 미검증이다. PM/UXR 비교는 후속 선택지로 보존했다. 선택은 직업의 최종 순위나 확정이 아니라 이후 검증할 질문의 선정이다.

### 완료 범위

Week 2의 조사·Skill Gap·실행 난이도/매력·Cross Review·가설 3개·중간보고서 근거 정리까지 완료했다. Week 3 실험 설계·등록·실행, Week 4 최종 가설·로드맵·30일 목표는 착수하지 않는다. 실험 결과와 T1은 없다.

## 근거 파일

- 최종 Cross Review
- 직무와 성장경로
- Skill / Evidence Gap Matrix
- 시장자료 확인 수준
- Codex 비교 입력 메타데이터
- Gemini 수용 결과


---

# Week 2 Cross Review
## Codex × Gemini

Date: 2026-10-17 | Status: COMPLETED | 실험 미수행 / 최종 진로 미결정

## 1. Independent Run Check

| Agent | Independent Run | Dataset | Other Agent Seen |
|---|---|---|---|
| Codex | YES — 기존 독립 보고서 메타데이터 | v1.0 | NO — 원래 분석 시점 |
| Gemini | YES — USER_REPORTED | v1.0 — USER_REPORTED | NO — USER_REPORTED |
| Claude | UNAVAILABLE | - | - |

사용자가 기존 Codex 보고서를 여기서 비교 입력하고 직전 메시지를 Gemini 결과로 사용하도록 명시했다. 이에 대기 조건을 해소했다. Codex는 새 독립 실행으로 소급 표시하지 않고 10월 16일 원본의 바이트 동일 Week 2 비교 입력 사본을 저장했다. 메타데이터에 출처·해시·재사용을 기록했다.

Gemini는 사용자 전달 결과 보관물과 구조화 요약을 사용한다. 전체 원문은 NOT STORED이며 수용된 발췌 결과다. 독립성·동일 입력은 사용자 확인이고 별도 원문/해시 검증은 UNKNOWN. 두 결과 보존 후 이번 비교를 수행했다. 기존 초기 비교는 과거 입력 기반 기록으로 보존한다.

## 2. Candidate Comparison

Codex는 총순위를 부여하지 않았고 미평가 기준 때문에 총점 null이다. Gemini 점수는 전달값이며 기준별 계산은 미보관이다. 숫자를 평균내거나 Codex 부분합을 100점 환산하지 않는다.

| Career | Codex Rank | Gemini Rank | Codex Score | Gemini Score | Agreement |
|---|---|---:|---|---:|---|
| AI Product Manager | null, 우선 탐색 | 1 | null | 89.5 | 우선 탐색 일치; 확신 수준 다름 |
| Product Strategy / BizOps | null, 선택지 유지 | 2 | null | 85.0 | 후보 일치; 우선순위 다름. BizOps 명시 범위는 Gemini |
| HCI / Human-AI Interaction | null, 연구 행동 검증 | 3 | null | 79.0 | 관심과 실제 연구의 구분 필요 |
| B2B AI Solution Architect | null, 독립 후보 없음 | 4 | null | 79.0 | Gemini 추가 후보. 이번 사후 조사와 Codex 원추천을 구분 |
| UX Researcher | null, 우선 비교 | 5 | null | 73.75 | 후보 일치; 비교 가치 다름 |
| Startup Founder | null, 선택지 유지 | 6 | null | 70.5 | 즉시 확정할 근거 부족 |
| Product Manager | null, 우선 비교 | null, 별도 순위 없음 | null | null | Gemini의 AI PM과 부분 중첩 |

## 3. 공통점 분석

| Agreement | Codex Evidence | Gemini Evidence | Evidence Strength | Remaining Unknown |
|---|---|---|---|---|
| 사람·AI·사업 접점 탐색 | 제품·조사·K-Beauty·자동화 | G1 Human Behavior × AI → Business Value | MODERATE — 반복 자기보고의 해석 | 본인 기여·사용자 가치·실제 성과 |
| 제품과 사업 판단 연결 | AI PM·전략 모두 후보 | G2 building↔strategy 스펙트럼 | MODERATE | 구현과 분석 중 일상 업무 선호 |
| 산출물 증거 필요 | 기간·역할·성과 증거 부족 | G4 Evidence Gap와 PRD·case·metrics·portfolio | MODERATE | 산출물 품질과 검증 가능성 |
| 지표·분석·AI 평가 진단 | PM 지표·AI 평가·전략 재무 Gap | G5 analytics·SQL·A/B·LLM evaluation·unit economics | MODERATE — 업무상 요구는 타당, 개인 숙련도는 UNKNOWN | 배워야 하는지 보여주기만 하면 되는지 |
| 연구 관심과 연구 수행 구분 | H2 REFINE, 문헌·방법 실험 | G3 HCI 장기 특화, 논문 과제 제안 | MODERATE | 문헌·통계·긴 피드백 주기 선호 |

동일 Dataset에서 나온 두 Agent 합의는 독립적인 사용자 수행 증거 2건이 아니다. STRONG 수준의 객관적 직무 적합성 증거는 아직 없다.

## 4. 차이점 분석

| Difference | Codex Position | Gemini Position | Why they differ | Which evidence is stronger? | What experiment can resolve it? |
|---|---|---|---|---|---|
| 점수와 확신 | null·LOW, 미평가 유지 | AI PM·Strategy HIGH | 미확인 항목 처리·추론 적극성이 다름. 상세 산식 미보관으로 원인은 일부 UNKNOWN | 결측을 드러내는 Codex 방식이 확신 보정에 유리; 적합성 우위는 판정 불가 | 실제 산출물과 외부 검토 후 재평가 |
| Strategy 우선순위 | 선택지 유지 | 85점·2위 | Gemini는 사업 가치·Evidence Gap을 강조; Codex는 재무·시장 분석 직접 증거 부족 강조 | K-Beauty는 접점 증거지만 전략 업무 성과 증거는 양쪽 부족 | EX-W3-02 |
| HCI의 현재 위치 | 선택적 연구 행동 실험 | 장기 대학원·특화, Week 3 검증 | 시간 범위·정보 가치 판단 차이 | 장기 트랙은 선택지 해석이며 학위 필수는 미검증 | EX-W3-03 |
| UXR 비교 가치 | PM과 직접 비교 우선 | 5위·Week 3 제외 | Codex는 반복 조사 경험, Gemini는 Business Value를 강조 | 실제 인터뷰 자기보고는 존재하나 PM 우위 직접 증거 없음 | 이번 HCI 방법 작업에 조사 선호 기록; PM/UXR 직접 비교는 후속 |
| SA 중요도 | 독립 결과에 없음 | 4위 | 고객·기술 구현 경험의 전이 해석 차이 | 클라우드 구조·배포·운영 근거가 없으므로 당장 유리하다고 판단 불가 | 추후 작은 PoC와 구성도·복구 설명 |
| 창업 | F1 마찰과 계약·군·이커머스 반례 함께 고려 | 6위·HIGH difficulty | Gemini 상세 반대 근거는 전달 내용에 없음 | Codex 반대 증거가 더 추적 가능하나 창업 배제 근거는 아님 | AI 제품의 두 세션 재수정, 장기 반복은 별도 |

## 5. Evidence Quality Review

| 주요 주장 | Strength | 근거와 한계 |
|---|---|---|
| 조사·초기 구현·자동화 행동이 반복됨 | MODERATE | 여러 자기보고 경험이 있으나 원산출물·기여·성과 외부 검증 미수행 |
| K-Beauty 계약이 AI PM 적합성을 입증 | WEAK | 계약 자기보고는 의미 있는 경험이지만 지표·전주기 운영 능력의 입증은 아님 |
| AI로 사업 가치를 만들 때 더 적합 | WEAK | G1 해석과 도메인 전이 가설. 실제 비교 필요 |
| 가장 큰 병목은 Evidence Gap | WEAK | 기존 경험의 문서화 부족은 보이나 SQL·통계 등 Skill Gap도 UNKNOWN |
| Stripe 역할은 7년+ 경력 요구 | STRONG — 해당 공고 내용에 한함 | 공식 본문 W2-M2 확인. 전체 시장이나 학생 지원 가능성으로 일반화 불가 |
| 가장 높은 수요·합격률 3배·2–4주 지원 준비·HCI 학위 필수 | UNVERIFIED | 근거 불충분, FACT·채택 근거에서 제외 |

## 6. Skill Gap Cross Review

통합 Skill Gap Matrix에 현재 증거·각 Agent 판단·확인 과제를 연결했다. Skill Gap은 직접 수행 진단에서 부족함이 확인되어야 확정한다. 현재 다수 항목은 잠재 Gap/UNKNOWN이다. Evidence Gap도 파일이 안 보인다는 이유로 사용자가 아무 자료도 갖고 있지 않다고 단정하지 않는다.

우선순위는 기존 경험의 역할·과정·성과 정리와 PRD/지표, SQL·분석, LLM 평가다. Strategy는 시장규모·unit economics, HCI는 통계·문헌·연구방법을 해당 실험에서 구분한다.

## 7. Career 실행 난이도 비교

아래 재평가는 LOW confidence INFERENCE이며 단기 실험 난이도가 아닌 현재 프로필에서 채용/연구 진입에 필요한 준비 부담이다. 국내 신입 표본은 부족하다. 추가 학위·기술·자료·인턴·영어·분석·연구 실적을 고려했으나 미확인 값이 많아 범주를 확정된 예측으로 쓰지 않는다.

| Career | Codex 기존 판단 | Gemini | 이번 준비 부담 | 주요 조건 |
|---|---|---|---|---|
| AI PM | 직접 경력직 표본 높음, 신입 UNKNOWN | LOW-MEDIUM | MEDIUM-HIGH | 학위 보편 필수 UNKNOWN; 평가·지표·포트폴리오·운영·인턴·영어 진단 |
| Strategy / BizOps | 직접 공고 당시 미조사 | MEDIUM | MEDIUM-HIGH | 분석·재무·시장 판단, 인턴/업무 실적. Stripe 표본 7년+ |
| HCI | 연구 수행 미검증 | HIGH | HIGH | 연구방법·통계·문헌·영어·성과. 학위 요건은 기관별 확인 |
| SA | 별도 평가 없음 | MEDIUM-HIGH | HIGH | 클라우드·구조·배포·보안·실서비스 운영과 고객 기술 소통 |
| UXR | 경력직 직접 진입 높음, 신입 UNKNOWN | LOW-MEDIUM | MEDIUM-HIGH | 연구 전주기·정량·포트폴리오·의사결정 영향, 영어 수준 |
| Founder | 사업화 부담 높음 추정 | HIGH | HIGH | 학위보다 고객·반복 판매·운영·재정 조건. 채용 경쟁과 다른 기준 |

## 8. Week 3 후보 가설 비교

| 방향 | Codex 기존 실험/초안 | Gemini 제안 | 채택 방식 |
|---|---|---|---|
| AI PM | E2 반복 개선, W2-H1 | PRD 작성·몰입·확신 | PRD와 고정 평가·수정 결합 |
| Strategy | 선택지, 초기 W2-H3 B2B/B2C 비교 | GTM·Market Sizing 분석 | 사업 분석 수행 자체를 우선 검증. B2B 우위 비교는 후속으로 이동 |
| HCI | E4 방법 비평·재설계, 초기 우선순위 밖 | 논문·Research Proposal | 독립적인 연구 방향의 정보 가치 때문에 우선 실험에 포함 |
| UXR | E1 PM/UXR 비교, 초기 W2-H2 | 이번 우선 가설 밖 | 가치 있는 후속으로 보존. 삭제·반증 처리 안 함 |

## 9. 최종 Career Hypothesis 3개 선정

자동 상위 3개 선택이 아니라 경험 근거·중요 미확인·1–4시간의 정보 가치·방향 간 구분·불확실성 감소를 기준으로 선정했다. AI PM은 제품 책임, Strategy는 사업 분석, HCI는 연구 방법을 재현해 다른 업무 선호를 비교한다. 모두 Score null / Confidence LOW / SELECTED FOR TESTING, 지지된 가설이 아니다.

| ID / Hypothesis | Why selected | Codex Evidence | Gemini Evidence | Counter Evidence | Critical Unknown | Confidence Before |
|---|---|---|---|---|---|---|
| W2-H1: AI workflow의 PRD·평가·재수정을 반복하고 싶을 수 있다 | 외부 고객·AI 경험에 가장 가깝고 운영 공백 검증 | K-Beauty·자동화, E2 | 89.5·G1·PRD/analytics·H-AI PM | F1 지속 고도화 마찰·기여/성과 미확인 | 문서 작성뿐 아니라 평가·유지보수를 선호하는가 | LOW |
| W2-H3: 고객·시장·수익 가정으로 제품 도입 우선순위를 결정하는 Strategy 업무를 반복하고 싶을 수 있다 | 사업 판단과 구현 선호를 구분하고 추천 차이를 검증 | 시장 탐색·이커머스, 전략의 재무 공백 | 85·G2·Market Sizing/Unit Economics·H-Strategy | 단일 거래 성과로 전략 능력 추정 불가 | 수치·가정·반대 근거를 다루는 일상 업무 선호 | LOW |
| W2-H4: Human-AI 논문 방법 비평·재설계를 반복하고 싶을 수 있다 | 연구 대 제품/사업 경로의 큰 불확실성을 작은 과제로 축소 | H2 REFINE·E4, 심리·SwiftUI 접점 | 79·장기 특화·H-HCI | 논문·통계·연구 실적 미확인; 관심과 연구 선호는 다름 | 결과 지연·방법 엄밀성 작업에 몰입하는가 | LOW |

W2-H2 PM/UXR는 DEFERRED, 기존 H1–H4와 초기 가설 원문은 보존한다. W2-H3의 B2B>B2C 부분은 미반증·미채택의 후속 질문으로 유지한다. W2-H4는 기존 codex:H4/gemini:H4와 다른 ID다.

## 10. Week 2 종료 범위

사용자 최신 지시에 따라 현재는 연구·비교·가설 선정까지만 수행한다. Week 3 실험의 설계·등록·실행과 Week 4 결정·로드맵은 착수하지 않는다. 선정 가설은 W2-H1·W2-H3·W2-H4이며 모두 미검증 LOW / null이다. 앞선 비교표의 EX-W3-01–03 표기는 작성 중이던 후속 아이디어를 가리키며 확정·등록된 실험이 아니다. 작성 중 초안은 experiments/drafts/에 미채택 이력으로만 보존하고 활성 실험은 0건이다.

## 11. 완료 범위와 제약

두 수용된 결과 보관·비교, 시장 출처 점검, Skill/Evidence Gap 통합, 가설 3개 선정, 중간보고서 근거 정리를 완료했다. Gemini 전체 원문 미보관·독립성 사용자 확인, Codex 기존 독립 결과 재사용, Claude 구독 제약은 남는다. 따라서 원계획 3개 Agent가 아니라 실행 가능한 수정계획 2개 Agent의 Week 2를 완료한 상태다. Week 3/4는 NOT STARTED이고 실험 결과·T1·최종 진로·12개월 계획은 없다.


---

# Week 2 Skill / Evidence Gap Matrix

Date: 2026-10-17. 자기보고 경험과 실제 숙련도는 구분한다. 필요한 역량이 존재한다는 사실만으로 개인의 부족을 확정하지 않는다. 아래 Skill 항목은 대부분 미측정 잠재 Gap이다. P1=첫 진단·증거 확보, P2=방향 확인 후 심화.

| Skill / Evidence Gap | 현재 근거·상태 | Codex | Gemini | Consensus | Priority / 확인 과제 |
|---|---|---|---|---|---|
| SQL (잠재 Skill) | 자동화 경험은 있지만 SQL 수준 UNKNOWN | 전략 SQL UNKNOWN | G5 SQL | 미측정 | P1: 간단한 집계·JOIN 과제; EX-02 대체 분석의 한계 기록 |
| Product Analytics (잠재 Skill) | MVP 있으나 지표 운영 UNKNOWN | PM 지표·실험·개선 | AI PM 핵심 Gap | 지표 해석과 운영 증거 필요 | P1: EX-01 성공/실패 지표·측정 계획 |
| A/B Test (잠재 Skill) | Fake Door 경험은 무작위 실험 증거가 아님 | PM 실험·통계 미확인 | G5 A/B Test | 실험 경험 종류 구분 | P2: 가설·대조조건·편향 설명, 대규모 결과 생성 금지 |
| PRD (Evidence + 잠재 Skill) | 마음잇기·AI Agent; 원 PRD 품질 UNKNOWN | 제품 개선안·요구·우선순위 | AI PM 핵심 Gap | 기존 판단을 문서로 검증 | P1: EX-01 2쪽 PRD와 포기한 대안 |
| LLM Evaluation (잠재 Skill) | AI 활용, 고정 평가셋 없음/미확보 | 평가·오류·시간·비용 | G5 LLM Evaluation | AI 사용과 운영평가 구분 | P1: EX-01 입력 5개·전후 오류·수동 대체 |
| Market Sizing (잠재 Skill) | 시장 탐색 자기보고, 수치 산식 UNKNOWN | 전략 시장 분석 공백 | Strategy 핵심 Gap | 크기보다 근거·가정 중요 | P1: EX-02 단위·기간·가정·민감도 |
| Unit Economics (잠재 Skill) | 계약·판매, 수익 계산 UNKNOWN | 재무·수익·런웨이 | Strategy 핵심 Gap | 단위 비용·가격·반복 사용 진단 | P1: EX-02 절감/도입 비용 표; 가정값 명시 |
| Statistics / Quant Research (잠재 Skill) | 심리학·설문, 숙련도 UNKNOWN | UXR/HCI 통계·표집 | G5 Quantitative Research | 전공을 숙련도 대용으로 쓰지 않음 | P1: EX-03 변수·분석 계획·해석 한계 |
| Academic Research (잠재 Skill) | 논문·재현 경험 UNKNOWN | E4 방법 비평 | HCI proposal | 연구 행동 먼저 검증 | P1: EX-03 원문 방법 비평·재설계 |
| English Communication (미확인 Skill) | 글로벌 판매·여행, 직무 소통 수준 UNKNOWN | 영어·허가 UNKNOWN | 제공 Week 2 상세에 직접 평가 없음 | 합의 아님; 공통 개인 미확인 | P2: 목표 공고의 발표·쓰기 과제로 별도 진단 |
| Portfolio Evidence (Evidence) | 여러 프로젝트 자기보고; 역할·기간·성과 파일 미확보 | 산출물·기여·성과 요구 | G4 Evidence Gap | 증거 정리 필요 | P1: 경험 1건의 역할·과정·결과·한계 정리 |
| Production Architecture (잠재 Skill) | AI prototype·SwiftUI, 배포·보안 UNKNOWN | 독립 결과 SA 평가 없음 | SA 후보 79점 | 합의 없음·당장 진입성 미확인 | P2: 구성도·배포·오류 복구 수행 표본 |

Evidence Gap: 경험은 보고됐으나 그 경험을 검토할 산출물·본인 역할·결과가 현재 저장소에서 충분히 연결되지 않음. Skill Gap: 실제 과제에서 부족함을 확인했을 때 학습 과제로 전환. 두 Gap은 함께 존재할 수 있으며 포트폴리오 작성만으로 숙련도·합격률 상승을 보장하지 않는다.
