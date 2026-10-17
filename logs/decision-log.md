# Decision Log

## 2026-10-16

- Previous State: 프로젝트 소개 README만 존재.
- New State: Next.js / TypeScript / Tailwind CSS와 Week 1 데이터·문서 구조 도입.
- Reason: 기존 앱이 없어 지시서 기본 스택 적용. 원래 프로젝트 소개 보존.
- Evidence: Repository audit.

사용자 진로 결정은 수행하지 않음. 가설은 NEW, 미입력 값은 null / UNKNOWN.

## 2026-10-16 — Build 환경 조정

- Previous State: Next.js 기본 Turbopack dev/build.
- New State: dev/build에 --webpack 명시.
- Reason: 이 실행 환경에서 Turbopack 내부 포트 생성이 제한됨.
- Evidence: Turbopack Operation not permitted 오류. Webpack 프로덕션 빌드 성공.

## 2026-10-16 — 실제 입력과 Codex 해석 변경

- Previous State: Dataset v0.1, T0·마찰 자료 미입력, H1–H3 NEW.
- New State: v1.0, 실제 T0와 F1–F5 자기보고, DF1–DF4/H4 LOW 가설. H1/H2 REFINE, H3 WEAKEN. 이전 원문은 hypothesis-history와 기존 기록에 보존.
- Reason: 시작·지속·결정 실행을 분리하고 성과·미완료를 함께 반영. 부모 조언과 본인 가치 분리. 시장/가치 미확인 항목은 null.
- Evidence: 2026-10-16 사용자 자기보고와 Codex 독립 보고서. 외부 자기보고 검증·다른 Agent 합의는 아님.
- Protocol: 동일 시점 공통 입력 사본·SHA-256 보존. 기존 Week 1 공통 Mission의 최종 순위 금지는 유지하면서 이번 명시 요청에 따라 독립 분석 수행; 탐색 우선순위만 제안하고 직무 최종 결정은 하지 않음.


## 2026-10-16 — Gemini 유효 결과 인정 / Claude 접근 제약

- Previous State: Gemini AWAITING_ORIGINAL_REPORT, Gemini·Claude·전체 결과 저장 미완료, 3-Agent Cross Review 예정.
- New State: Gemini Summary JSON 유효 결과 인정 및 실행 COMPLETED; 원문 NOT STORED 유지. Claude UNAVAILABLE 및 done=false. 실행 가능한 결과 저장 완료. Week 2는 Codex + Gemini 계획.
- Reason: 사용자 명시 지시로 실행 완료와 원문 보관 여부를 분리하고 Claude 구독 해지 제약 반영.
- Evidence: 사용자 현 메시지, 기존 Codex 보고서 및 Gemini summary.json 실제 파일 존재.
- Scope: 상태·계획만 변경. Agent 분석·점수·Dataset·최종 진로 결정은 변경하지 않음.


## 2026-10-17 — Week 2 Cross Review

- Previous State: Codex/Gemini 독립 결과 보관, Cross Review PLANNED.
- New State: 요약 기반 REVIEWED WITH CONSTRAINTS. W2-H1 AI 제품 반복 개선, W2-H2 PM/UXR 비교, W2-H3 B2B 제품전략 검증 대상 선정. 모두 LOW / null / 미검증.
- Reason: 공통 추천과 해석 차이를 행동으로 구분하고 직무 요구·현재 증거·반대 근거를 연결.
- Evidence: reports/week2-cross-review.md, 기존 두 Agent 원본, 공식 외부 자료 S1–S7(접근·시점 제한 포함).
- Constraint: Gemini 상세 시장·Gap·반대 근거 원문 미확보. 이번 조사는 Codex의 사후 보완이며 새 독립 실행이 아님. Dataset·T0/T1·원본 점수 보존, 실험·외부 연락 미수행.

## 2026-10-17 — Week 2 원문 반영 요건 점검

- Previous State: 10월 16일 독립 결과 기반 요약 Cross Review, W2-H1–H3 선정 초안.
- New State: 새 Week 2 요약 보존, 원문 기반 재검토 AWAITING_REQUIRED_REPORTS. Dashboard EXPLORE tasks PENDING으로 정정.
- Reason: 사용자 6항은 두 Week 2 독립 보고서가 없으면 Cross Review 중단을 요구. Gemini 원문은 자리표시자이며 Codex 별도 Week 2 독립 파일 없음.
- Codex Evidence: 10월 16일 독립 보고서와 10월 17일 사후 비교 보고서만 존재.
- Gemini Evidence: 사용자 전달 AI PM 89.5 / Strategy 85 등 별도 summary.json 보존. 독립 실행 완료·Codex 미열람은 사용자 확인.
- Counter Evidence: 기존 Week 2 비교 문서는 독립 결과가 아니며 원문 누락을 대체하지 못함.
- Status: 새 비교·가설 변경·실험 확정 미수행. 기존 원문·가설 이력·T0/T1 보존. 상세 reports/week2-import-check.md.

## 2026-10-17 — Week 2 EXPLORE 최종 정리 / 범위 확정

- Previous State: 새 입력 요건 대기 후 사용자 확인으로 결과 수용; 작성 중 Week 3 초안과 실험 계획 3건 등록.
- New State: Codex 기존 독립 보고서를 바이트 동일 Week 2 비교 입력으로 보존하고 Gemini 사용자 전달 발췌·구조화 결과를 수용. Cross Review COMPLETED. Week 2 COMPLETE WITH CONSTRAINT. Week 3/4 NOT STARTED.
- Reason: 사용자가 기존 Codex 결과 직접 비교와 직전 Gemini 결과 사용을 명시했고, 이후 이번 실행을 Week 2까지로 한정했다.
- Evidence: agents/cross-review/2026-10-17-codex-gemini-week2.md; research/week2-*.md; reports/week2-midterm-summary.md.
- Current Hypotheses: W2-H1 AI PM, W2-H3 Product Strategy, W2-H4 HCI, 모두 SELECTED FOR TESTING / LOW / null. W2-H2는 DEFERRED. 실험 전 적합성 확정 아님.
- Scope Correction: 활성 실험 3건 등록 취소·모든 experimentCount=0. 작성 중 상세 초안은 experiments/drafts/week3-micro-experiments-unadopted.md에 미채택 이력으로 분리. 설계·실행 확정 아님.
- Constraints: Claude 구독 제한 UNAVAILABLE. Gemini 전체 원문 NOT STORED, 전달 결과를 사용자 확인으로 수용. Codex 새 독립 실행을 소급 주장하지 않음. 시장 주장은 확인 수준별로 구분.
- Week 3/4: 실험·전후 측정·T1·최종 진로·12개월 로드맵·30일 목표 미착수. 기존 Dataset·Baseline·독립 보고서 원본은 유지.

## 2026-10-17 — 개인 포트폴리오와 채용시장 연결

- Previous State: 진행률·가설·Baseline 위주의 Career OS Dashboard.
- New State: Careerfolio — 자기소개/경험/강점 근거/가치·환경 가설/6개 진로/Skill Gap/공개 채용 피드/Week 1·2 근거 문서 탐색.
- Reason: 사용자가 자기 정보를 간편하고 자세히 파악하고 진로시장·실제 공고와 연결하는 개인 포트폴리오 화면 요청.
- Evidence: Personal Career Dataset v1.0, Week 2 Cross Review·landscape·skill matrix, 공개 Greenhouse Job Board API의 Figma·Anthropic 실제 응답.
- Implementation: 서버가 개인 Dataset을 읽고 UI에 전달. 공개 공고를 8초 타임아웃으로 병렬 조회. 최초/수동/활성 화면 10분 갱신, 오류·마지막 수신 시점·부분 표본을 표시. 신입 여부는 키워드 참고이며 지원 자격 판정 아님.
- Preservation: Week 1/2 보고서·가설 원본·Dataset·Baseline·Dashboard 상태 데이터 보존. 실험 0건, Week 3/4 미착수. 정적 프로젝트 그래픽은 경험의 시각화이며 실제 제품 화면으로 주장하지 않음.
