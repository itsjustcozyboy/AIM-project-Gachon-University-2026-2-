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

Week 2 — EXPLORE: **COMPLETE WITH CONSTRAINT**.

- Codex 기존 독립 보고서와 사용자가 전달·수용한 Gemini Week 2 결과를 보존하고 Cross Review 완료.
- 실제 업무·채용공고·요구 역량·성장경로, Skill/Evidence Gap, 난이도·매력·반대 근거 정리.
- 검증 대상으로 AI PM(W2-H1), Product Strategy(W2-H3), HCI(W2-H4) 3개 선정. 모두 LOW confidence·미검증.
- Claude Code는 구독 제한으로 UNAVAILABLE. 수정계획의 2개 Agent를 비교했다.
- Gemini 전체 원문 미보관·독립 실행 사용자 확인, Codex 기존 결과 재사용이라는 제약을 명시했다.
- 현재 실행 범위는 2주차까지. Week 3/4 미착수, 활성 실험 0건·T1 미입력.

[중간 활동보고서 근거](reports/week2-midterm-summary.md) · [Cross Review](agents/cross-review/2026-10-17-codex-gemini-week2.md) · [Skill Gap](research/week2-skill-gap-matrix.md) · [시장자료 검증](research/week2-market-evidence.md)

Week 1은 COMPLETE WITH CONSTRAINT로 유지한다. 원계획 12/13, 실행 가능한 수정계획 12/12 완료. 기존 입력과 Agent 결과는 보존했다.

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

## 현재 작업 경계

2주차 산출물까지 완료했다. 3주차 실험 설계·실행과 4주차 최종 결정·로드맵·30일 목표는 이번 범위에 포함하지 않는다. 작성 중이던 후속 상세 초안은 `experiments/drafts/`에 미채택 이력으로만 보존하며 Dashboard 실험에는 등록하지 않는다.
