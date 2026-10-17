# Week 2 Cross Review
## Codex × Gemini

Date: 2026-10-17 | Status: COMPLETED | 실험 미수행 / 최종 진로 미결정

## 1. Independent Run Check

| Agent | Independent Run | Dataset | Other Agent Seen |
|---|---|---|---|
| Codex | YES — 기존 독립 보고서 메타데이터 | v1.0 | NO — 원래 분석 시점 |
| Gemini | YES — USER_REPORTED | v1.0 — USER_REPORTED | NO — USER_REPORTED |
| Claude | UNAVAILABLE | - | - |

사용자가 기존 Codex 보고서를 여기서 비교 입력하고 직전 메시지를 Gemini 결과로 사용하도록 명시했다. 이에 대기 조건을 해소했다. Codex는 새 독립 실행으로 소급 표시하지 않고 [10월 16일 원본](../results/codex/2026-10-16-report.md)의 바이트 동일 [Week 2 비교 입력 사본](../results/codex/2026-10-17-week2-report.md)을 저장했다. [메타데이터](../results/codex/2026-10-17-week2-input-metadata.json)에 출처·해시·재사용을 기록했다.

Gemini는 [사용자 전달 결과 보관물](../results/gemini/2026-10-17-week2-report.md)과 [구조화 요약](../results/gemini/2026-10-17-week2-summary.json)을 사용한다. 전체 원문은 NOT STORED이며 수용된 발췌 결과다. 독립성·동일 입력은 사용자 확인이고 별도 원문/해시 검증은 UNKNOWN. 두 결과 보존 후 이번 비교를 수행했다. 기존 [초기 비교](../../reports/week2-cross-review.md)는 과거 입력 기반 기록으로 보존한다.

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

[통합 Skill Gap Matrix](../../research/week2-skill-gap-matrix.md)에 현재 증거·각 Agent 판단·확인 과제를 연결했다. Skill Gap은 직접 수행 진단에서 부족함이 확인되어야 확정한다. 현재 다수 항목은 잠재 Gap/UNKNOWN이다. Evidence Gap도 파일이 안 보인다는 이유로 사용자가 아무 자료도 갖고 있지 않다고 단정하지 않는다.

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

두 수용된 결과 보관·비교, 시장 출처 점검, Skill/Evidence Gap 통합, 가설 3개 선정, [중간보고서 근거](../../reports/week2-midterm-summary.md) 정리를 완료했다. Gemini 전체 원문 미보관·독립성 사용자 확인, Codex 기존 독립 결과 재사용, Claude 구독 제약은 남는다. 따라서 원계획 3개 Agent가 아니라 실행 가능한 수정계획 2개 Agent의 Week 2를 완료한 상태다. Week 3/4는 NOT STARTED이고 실험 결과·T1·최종 진로·12개월 계획은 없다.
