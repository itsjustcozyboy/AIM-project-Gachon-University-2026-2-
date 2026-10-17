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

- [최종 Cross Review](../agents/cross-review/2026-10-17-codex-gemini-week2.md)
- [직무와 성장경로](../research/week2-career-landscape.md)
- [Skill / Evidence Gap Matrix](../research/week2-skill-gap-matrix.md)
- [시장자료 확인 수준](../research/week2-market-evidence.md)
- [Codex 비교 입력 메타데이터](../agents/results/codex/2026-10-17-week2-input-metadata.json)
- [Gemini 수용 결과](../agents/results/gemini/2026-10-17-week2-report.md)
