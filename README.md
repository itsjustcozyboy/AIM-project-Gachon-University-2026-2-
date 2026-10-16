# Career OS

Agentic AI와 함께 만드는 자기탐구·직무검증·실행 로드맵 프로젝트.
진로를 즉시 추천받는 대신, 데이터와 외부 증거·현실 실험으로 진로 불확실성을 줄인다.

기존 프로젝트 소개: **AIM-project-Gachon-University-2026-2-** — 2026-2 Gachon University Artechne project #12

## Core Process

```text
ME → EXPLORE → TEST → DECIDE & ACT
```

## Method

```text
Personal Data + Multiple AI Agents + External Career Evidence
+ Real-world Experiments = Career Decision Evidence
```

## Current Status

Week 1 — ME: **COMPLETE WITH CONSTRAINT**.

- Personal Career Dataset v1.0, 실제 마찰 경험, Career Baseline T0 입력 완료. 구체적 비선호·가치관 점수는 추가 확인 대상.
- 공통 Mission / Evaluation / Output Format 및 Dashboard 준비 완료.
- Codex Independent Run: COMPLETED — Markdown 보고서 보관.
- Gemini Independent Run: COMPLETED — 구조화 Summary JSON을 유효 결과로 인정. 원문 전체는 NOT STORED.
- Claude Code: UNAVAILABLE — Subscription unavailable at execution time.
- 원계획 달성: 12/13 (92.3%). 실행 가능한 수정계획 달성: 12/12 (100%).
- Gemini 점수·해석은 Gemini 주장으로 보존. Market Evidence: UNVERIFIED.

당초 3개 Agent 실행을 계획했으나 Claude 구독 이용 제약으로 Codex와 Gemini 중심으로 변경했다. Claude 결과는 생성하지 않는다. 다음 단계는 Codex × Gemini Cross Review이며 아직 수행하지 않았다.

## Repository Structure

```text
app/                 Next.js Dashboard UI / styles
CODEX_CAREER_OS_WEEK1.md  Week 1 실행 지시서
IMPLEMENTATION_REPORT.md  구현 및 검증 결과
data/                개인 데이터 Markdown / YAML, T0·T1 및 가치관, 마찰 경험
agents/              공통 Mission, 평가 기준, 출력 템플릿
  results/{codex,claude,gemini}/  Codex 보고서 / Gemini Summary JSON (Claude unavailable)
hypotheses/          가설과 변경 이력
experiments/         실험 안내, 템플릿, results/
research/            jobs/, companies/, career-paths/ 증거 저장 공간
dashboard/           UI 데이터 JSON과 편집 안내
roadmap/             Week 4 작성용 TODO 문서
logs/                의사결정·진행 기록
```

## Dashboard 실행

Node.js 20.9 이상 필요. 이 환경에서는 Node.js 24 사용.

```bash
npm install
npm run dev
```

Codespaces의 Ports에서 **3000**을 열면 Dashboard를 확인할 수 있다.

```bash
npm run typecheck
npm run build
npm start
```

Next.js / TypeScript / Tailwind CSS 사용. 이 실행 환경의 Turbopack 내부 포트 제한을 피하기 위해 dev/build는 Webpack을 사용한다. 외부 계정·API 키·폰트 다운로드는 필요하지 않다.

## 데이터 편집

- 개인 경험 원본: `data/personal-career-dataset.yaml`. 자기보고 FACT / INFERENCE / HYPOTHESIS 구분.
- YAML 파일은 JSON 호환 YAML 1.2 문법으로 작성해 별도 파서 없이도 읽을 수 있다.
- T0 입력: `data/career-baseline.yaml`의 해당 `score`와 `t0`를 같은 값으로 입력하고 `measured_at.t0`를 기록한다. T1은 종료 시 입력. 점수는 1~10.
- 가치관: 같은 파일의 `career_values`에 4개 중요도 점수 입력.
- 실패·비선호: `data/friction-dataset.yaml`에 직접 입력. 빈 배열은 미입력 상태다.
- UI: `dashboard/career-os.json` 편집. 체크 변경은 브라우저 localStorage에 보관되며, 내보낸 JSON을 해당 파일에 반영하면 저장소에도 보존된다. 자동 서버 저장 기능은 없다.
- 브라우저에 저장된 체크 상태는 파일의 기본값보다 우선한다. 기본값으로 되돌리려면 브라우저 저장소의 `career-os-checklist-agent-status-v2` 키를 지운다.
- 원본 문서와 UI JSON은 자동 동기화되지 않는다. 변경 시 함께 갱신한다. 상세 안내는 `dashboard/README.md` 참조.
- 중요한 변경은 기존 기록을 보존하고 `hypotheses/hypothesis-history.md`, `logs/decision-log.md`에 추가한다.

## Next Step

Codex × Gemini 2-Agent Cross Review를 진행할 예정이며 [비교 계획](agents/cross-review-plan.md)에 범위를 기록했다. Gemini는 사용자 전달 Summary를 기반으로 하므로 원문 세부사항은 미확인으로 남긴다. 원문 전체 보관은 실행 완료와 별도로 관리한다.
최종 직무 순위, 실험 결과, 12개월 계획은 현재 확정하지 않는다.
