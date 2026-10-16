# Career OS — Week 1 Codex 실행 지시서

## 0. 프로젝트 개요

이 저장소는 **Agentic AI와 함께 만드는 Career OS: 자기탐구·직무검증·실행 로드맵 프로젝트**를 구현하기 위한 공간이다.

이 프로젝트의 목적은 단순히 AI에게 진로를 추천받는 것이 아니다.

다음 과정을 하나의 실행 가능한 Career OS로 만든다.

> 나를 데이터화 → 여러 AI Agent가 독립 탐색 → 실제 행동으로 검증 → 실행 로드맵으로 전환

현재는 다음 단계다.

# Week 1 — ME
## 나를 데이터화하고 Agent를 세팅

이번 Week 1의 목표는 다음과 같다.

1. 과거 경험, 성공/실패, 흥미, 가치관, 강점, 희망환경을 구조화해 Personal Career Dataset 작성
2. 현재 진로 확신도, 역량, 동기 수준을 사전 자기평가해 기준선 설정
3. Codex, Claude Code, Gemini에 동일한 Career Agent Mission / 판단기준 / 출력양식 부여
4. Career Action Dashboard 초안 제작

---

# 1. 전체 Career OS 구조

Career OS는 총 4단계로 진행된다.

## Week 1 — ME

나를 데이터화하고 Agent를 세팅한다.

주요 작업:

- Personal Career Dataset 작성
- 성공 경험 정리
- 실패 경험 정리
- 흥미 정리
- 가치관 정리
- 강점 가설 설정
- 선호 업무환경 정리
- Career Baseline 측정
- Career Agent Mission 작성
- Agent 판단기준 통일
- Agent 출력양식 통일
- Career Action Dashboard 초안 제작

## Week 2 — EXPLORE

3개의 AI Agent가 독립적으로 실제 진로시장을 탐색한다.

주요 작업:

- Career 후보 도출
- 실제 직무 분석
- 채용공고 조사
- 요구 역량 분석
- 성장경로 조사
- Skill Gap Matrix 작성
- Agent 결과 Cross Review
- 우선 검증할 Career Hypothesis 2~3개 선정

사용할 Agent:

- Codex
- Claude Code
- Gemini

중요:

각 Agent는 다른 Agent의 결과를 보기 전에 먼저 독립적으로 분석한다.

## Week 3 — TEST

선정된 Career Hypothesis를 실제 행동으로 검증한다.

Career Micro-Experiment 예시:

- 실제 채용공고 10개 분석
- 현직자 질문 또는 인터뷰
- UX Research 미니과제
- Product Strategy Memo 작성
- AI Product Prototype 제작
- 실제 직무 Simulation
- 특정 직무 관련 2~3시간 집중과제 수행

실험 전후에 다음을 기록한다.

- 흥미
- 몰입
- 난이도
- 역량 적합도
- 다시 하고 싶은 정도

핵심 질문:

> 상상 속에서 나와 잘 맞을 것 같은 직무와 실제로 경험했을 때 잘 맞는 직무는 같은가?

## Week 4 — DECIDE & ACT

Agent 분석과 Career Micro-Experiment 결과를 종합한다.

최종 결과:

- Career Hypothesis 1~2개 선정
- 12개월 Career Roadmap
- 월간 Milestone
- 주간 Checklist
- 다음 30일 Action Plan
- Career Action Dashboard 완성

---

# 2. Codex의 역할

Codex는 단순한 개발 보조 도구가 아니다.

이 프로젝트에서 Codex는 다음 역할을 맡는다.

1. Career OS Repository Architect
2. Career Research Agent
3. Experiment Designer
4. Career Action Dashboard Builder
5. Project Progress Manager

단, Codex가 사용자의 진로를 대신 결정해서는 안 된다.

Codex의 핵심 목적은 다음과 같다.

> 진로에 대해 그럴듯한 답을 만드는 것이 아니라, 진로 불확실성을 줄이는 시스템을 만든다.

---

# 3. Career Agent Mission

Codex는 다음 Mission을 기본적으로 따른다.

> 당신은 사용자의 진로를 대신 결정하는 상담가가 아니다.
>
> 당신의 역할은 Personal Career Dataset과 외부 증거를 바탕으로 가능한 Career Hypothesis를 생성하고, 그 가설을 현실에서 검증할 수 있도록 돕는 Career Research Agent이다.

## Objectives

1. 사용자의 경험, 역량, 흥미, 가치관을 분석한다.
2. 가능한 Career Path를 폭넓게 탐색한다.
3. 실제 직무와 채용시장의 증거를 조사한다.
4. 현재 역량과 요구 역량의 Skill Gap을 분석한다.
5. 각 진로의 장점뿐 아니라 반대 증거도 찾는다.
6. Career Hypothesis를 생성한다.
7. 각 가설을 검증할 Career Micro-Experiment를 설계한다.

---

# 4. Career Agent Operating Rules

모든 분석에서 다음 세 가지를 명확히 구분한다.

## FACT

확인된 사실.

예:

- 사용자가 심리학과로 전과했다.
- 사용자가 K-Beauty 프로젝트를 수행했다.
- 실제 채용공고에서 특정 역량을 요구한다.

## INFERENCE

Fact를 바탕으로 도출한 합리적인 해석.

예:

- 다양한 프로젝트 경험으로 볼 때 사용자는 문제 정의와 실행을 선호할 가능성이 있다.

## HYPOTHESIS

아직 검증되지 않은 가설.

예:

- 사용자는 UX Research보다 Product Management에 더 적합할 수 있다.

---

# 5. 중요한 판단 원칙

Codex는 반드시 다음 원칙을 지킨다.

- 사용자의 희망 진로를 정답으로 가정하지 않는다.
- 관심이 있다는 이유만으로 적합하다고 판단하지 않는다.
- Confirmation Bias를 경계한다.
- 추천 Career마다 반대 근거를 함께 찾는다.
- 가능한 경우 실제 채용공고와 직무정보를 근거로 판단한다.
- 데이터가 없으면 추측하지 않고 `UNKNOWN`으로 기록한다.
- 불확실성이 있다면 긴 고민보다 작은 현실 실험을 설계한다.
- 사용자를 칭찬하는 것보다 판단 근거를 명확히 하는 것을 우선한다.
- 사용자의 기존 진로 희망을 강화하기 위해 데이터를 선택적으로 해석하지 않는다.

---

# 6. Personal Career Dataset v0.1

## Basic Profile

```yaml
current_status:
  university: 가천대학교
  major: 심리학과
  year: 3학년

academic_transition:
  previous_major: 산업경영공학
  current_major: 심리학
  reason:
    - 사람 중심 문제정의에 대한 관심
    - 인간의 의사결정에 대한 관심
    - 인간 행동 이해에 대한 관심
```

---

# 7. Core Interest

```yaml
core_interests:
  - Psychology
  - Human Behavior
  - Product
  - UX
  - HCI
  - AI
  - Entrepreneurship
  - Business
  - Consumer Behavior
  - Organizational Behavior
```

현재 중요한 관심 축은 다음과 같다.

> Human Behavior × Product × AI × Business

중요:

이 방향은 최종 결론이 아니다.

앞으로 실제 데이터와 Experiment를 통해 검증할 초기 Career Direction이다.

---

# 8. Experience Dataset

## 8.1 전공 전환

### 산업경영공학 → 심리학

경험:

- 공학적 사고 경험
- 시스템 관점 경험
- 프로세스 기반 문제 해결 경험
- 인간 행동과 의사결정에 대한 관심 증가
- 실제 전과 실행

가능한 의미:

- System Thinking
- Interdisciplinary Thinking
- Career Self-direction

주의:

이 의미들은 아직 일부 INFERENCE다.

---

# 9. Entrepreneurship / Project Experience

## 휴식 → 회복 프로젝트

수행:

- 사용자 문제 탐색
- 설문
- 인터뷰

가능한 역량:

- User Research
- Problem Discovery

## K-Beauty 프로젝트

수행:

- 시장 탐색
- K-Beauty Buyer Sourcing AI Agent
- AI 활용
- 외부 프로젝트 수행
- 실제 계약 경험

가능한 역량:

- AI 활용
- B2B 문제 해결
- 프로젝트 실행
- Product Thinking
- Business Understanding

## Pet-tech 프로젝트

수행:

- 설문
- 인터뷰
- 사용자 문제 탐색

가능한 역량:

- Customer Discovery
- User Research

## 장례 사후관리 프로젝트

수행:

- 문제 정의
- Fake Door 방식 MVP 검증

가능한 역량:

- Hypothesis Testing
- MVP Design
- Validation Thinking

## 마음잇기 프로젝트

주제:

부모와 자녀가 매일 하나의 질문을 통해 서로를 이해하고 기록하는 서비스.

수행:

- 사용자 문제 정의
- 서비스 기획
- 가족 커뮤니케이션 문제 탐색
- MVP 구현

가능한 역량:

- Human-centered Product Design
- Service Planning
- Behavioral Understanding

## iOS / SwiftUI 프로젝트

수행:

- 앱 Prototype 개발

가능한 역량:

- Rapid Prototyping
- Product Building
- Technical Collaboration

---

# 10. Work Experience

## Global E-commerce

경험:

- K-pop Goods 해외 판매
- 상품 Listing
- Customer Service
- HS Code
- FedEx 송장
- 반복 업무 자동화

가능한 역량:

- Global Business
- Operations
- Automation
- Problem Solving

---

# 11. Leadership Experience

## 군 복무

경험:

- K9A1 병포반장
- 팀 단위 책임
- 현장 리더십
- 의사결정
- 실행 관리

가능한 역량:

- Leadership
- Responsibility
- Execution
- Decision Making

## 대학 프로젝트

경험:

- 팀장 역할
- 역할분담
- 일정관리
- 팀 커뮤니케이션
- 프로젝트 조율

가능한 역량:

- Project Management
- Coordination
- Leadership

---

# 12. Strength Hypotheses

현재 경험을 기반으로 한 초기 강점 가설이다.

확정된 강점이 아니며 추후 Experiment 결과에 따라 수정한다.

```yaml
strength_hypotheses:
  - execution
  - problem_definition
  - structuring
  - interdisciplinary_thinking
  - leadership
  - rapid_learning
  - ai_leverage
  - user_research
  - project_coordination
```

현재 반복적으로 보이는 행동 패턴:

> 문제 발견 → 사람 이해 → 구조화 → 해결책 기획 → 직접 만들어보기

이 또한 Career Fit을 판단하기 위한 초기 Hypothesis로 사용한다.

---

# 13. Career Candidate Pool

아직 추천 순위를 확정하지 않는다.

현재 탐색 후보군:

```yaml
career_candidates:
  - Product Manager
  - AI Product Manager
  - Product Strategy
  - UX Researcher
  - HCI Researcher
  - Human-AI Interaction
  - Behavioral Scientist
  - Consumer Insight
  - Organizational / People Analytics
  - Startup Founder
```

Codex는 위 후보에 제한되지 않는다.

Personal Career Dataset 분석 결과 새로운 Career Candidate를 발견하면 추가할 수 있다.

---

# 14. 초기 Career Hypotheses

현재 다음 가설을 생성한다.

단, 모두 검증되지 않은 가설이다.

## H1

> 사용자는 UX Researcher보다 Product Manager 역할에서 더 높은 몰입과 성과를 경험할 수 있다.

## H2

> 사용자는 순수 심리 연구보다 Human-AI Interaction 또는 HCI처럼 심리학과 기술이 연결된 영역에 더 적합할 수 있다.

## H3

> 사용자는 고도로 역할이 분업된 조직보다 초기 스타트업 또는 높은 자율성을 가진 Product 조직에서 더 높은 만족도를 경험할 수 있다.

이 Hypothesis는 Week 2와 Week 3에서 수정, 강화 또는 폐기할 수 있다.

---

# 15. Career Values Dataset

현재 가설:

| Value | Current Hypothesis |
|---|---|
| 성장 가능성 | 매우 높음 |
| 새로운 문제 해결 | 매우 높음 |
| 실제 결과물 | 매우 높음 |
| 자율성 | 높음 |
| 사람에 대한 이해 | 높음 |
| 기술 활용 | 높음 |
| 글로벌 환경 | 높음 |
| 높은 수준의 동료 | 높음 |
| 안정성 | UNKNOWN |
| 연봉 | UNKNOWN |
| 워라밸 | UNKNOWN |
| 사회적 영향 | UNKNOWN |

`UNKNOWN` 항목은 사용자가 직접 평가하기 전까지 임의로 설정하지 않는다.

---

# 16. Preferred Work Environment Hypothesis

현재 잘 맞을 가능성이 있는 환경:

- 비교적 작은 팀
- 높은 자율성
- 특정 문제를 처음부터 끝까지 경험할 수 있는 환경
- 사람 + 비즈니스 + 기술이 연결되는 업무
- 빠른 Feedback
- 실제 결과물을 만드는 업무
- 새로운 문제를 반복적으로 다루는 환경

추가 검증이 필요한 환경:

- 대기업의 고도로 세분화된 역할
- 장기간 연구 중심 업무
- 반복 운영 중심 직무
- 강한 위계 중심 조직

이 역시 확정된 Preference가 아니라 Hypothesis다.

---

# 17. Career Baseline — T0

Week 1에서 현재 상태를 수치화한다.

사용자의 입력 전까지 값은 `null`로 유지한다.

모든 점수는 1~10점이다.

```yaml
career_baseline:

  career_direction_confidence:
    score: null
    question: "나는 현재 내가 어느 진로 방향으로 가고 싶은지 알고 있다."

  job_understanding:
    score: null
    question: "나는 관심 직무가 실제로 어떤 일을 하는지 알고 있다."

  self_understanding:
    score: null
    question: "나는 나의 강점, 약점, 흥미, 가치관을 설명할 수 있다."

  skill_confidence:
    score: null
    question: "나는 목표 직무에 필요한 역량을 갖출 수 있다고 생각한다."

  execution_motivation:
    score: null
    question: "나는 진로 탐색을 실제 행동으로 옮기고 싶은 동기가 있다."

  career_execution_clarity:
    score: null
    question: "나는 앞으로 무엇을 해야 하는지 구체적으로 알고 있다."

  global_career_confidence:
    score: null
    question: "나는 글로벌 기업 또는 해외 진로를 현실적인 선택지로 느낀다."

  career_anxiety:
    score: null
    question: "나는 현재 진로에 대한 불확실성과 불안을 느낀다."
```

주의:

`career_anxiety`는 점수가 높을수록 부정적이다.

프로젝트 종료 시 동일한 질문으로 T1을 측정하여 Before / After를 비교한다.

---

# 18. Career Value Baseline

다음 항목도 1~10점으로 평가한다.

```yaml
career_values:

  stability:
    score: null

  salary:
    score: null

  work_life_balance:
    score: null

  social_impact:
    score: null
```

사용자의 직접 입력 전까지 `null`로 유지한다.

---

# 19. Failure / Friction Dataset

Career Fit을 평가할 때 성공 경험만 사용하면 안 된다.

실패, 비선호, 마찰 경험도 중요한 데이터다.

다음 구조를 만든다.

```yaml
friction_dataset:

  unfinished_projects: []

  good_at_but_dislike: []

  disliked_work_styles: []

  fast_bored_tasks: []

  non_negotiables: []
```

각 항목 의미:

## unfinished_projects

시작했지만 끝내지 못한 프로젝트.

## good_at_but_dislike

잘할 수 있지만 다시 하고 싶지는 않은 일.

## disliked_work_styles

싫어하는 업무 방식.

## fast_bored_tasks

흥미가 빨리 떨어지는 일.

## non_negotiables

향후 직장에서 절대로 포기하고 싶지 않은 조건.

---

# 20. Career Evaluation Framework

각 Career Candidate는 100점 기준으로 평가한다.

| Criterion | Weight |
|---|---:|
| Interest Fit | 15 |
| Strength Fit | 15 |
| Value Fit | 15 |
| Work Environment Fit | 10 |
| Existing Evidence | 10 |
| Market Opportunity | 10 |
| Growth Potential | 10 |
| Skill Acquisition Feasibility | 5 |
| Global Opportunity | 5 |
| AI Leverage | 5 |
| Total | 100 |

각 평가에는 점수만 작성하지 않는다.

반드시 다음 내용을 함께 기록한다.

```text
Score
Evidence
Reason
Confidence
```

Confidence는 다음 중 하나다.

```text
HIGH
MEDIUM
LOW
```

---

# 21. Career Agent 공통 출력 형식

Codex, Claude Code, Gemini 결과를 비교할 수 있도록 가능한 한 동일한 구조를 사용한다.

```markdown
# Career Agent Report

## 1. User Pattern Summary

사용자의 핵심 패턴 5개

---

## 2. Career Candidates

추천 Career Path 5개

---

## 3. Career Hypothesis Ranking

### Hypothesis 1

Career:

Score: /100

Confidence:

Why it fits:

Evidence:

Why it might NOT fit:

Counter Evidence:

---

## 4. Skill Gap

Current Strengths:

Missing Skills:

Critical Gaps:

---

## 5. Market Evidence

Relevant Job Titles:

Example Companies:

Required Skills:

Typical Career Path:

---

## 6. Career Micro-Experiment

Task:

Duration:

Output:

Success Criteria:

---

## 7. Unknowns

현재 판단을 위해 부족한 데이터

---

## 8. Final Recommendation

Explore Now:

Keep as Option:

Deprioritize:
```

---

# 22. Repository Structure

현재 Repository가 비어 있다면 다음 구조를 기본으로 생성한다.

```text
career-os/
├── README.md
├── data/
│   ├── personal-career-dataset.md
│   ├── personal-career-dataset.yaml
│   ├── career-baseline.yaml
│   └── friction-dataset.yaml
├── agents/
│   ├── career-agent-mission.md
│   ├── evaluation-framework.md
│   └── results/
│       ├── codex/
│       ├── claude/
│       └── gemini/
├── hypotheses/
│   ├── career-hypotheses.md
│   └── hypothesis-history.md
├── experiments/
│   ├── README.md
│   ├── experiment-template.md
│   └── results/
├── research/
│   ├── jobs/
│   ├── companies/
│   └── career-paths/
├── dashboard/
├── roadmap/
│   ├── 12-month-roadmap.md
│   └── next-30-days.md
└── logs/
    ├── decision-log.md
    └── progress-log.md
```

기존 Repository 구조가 있다면 무조건 위 구조로 덮어쓰지 않는다.

먼저 현재 Repository를 분석하고 자연스럽게 통합한다.

---

# 23. Career Hypothesis History

Career Hypothesis는 시간이 지나면서 바뀔 수 있다.

기존 기록을 삭제하지 않는다.

`hypotheses/hypothesis-history.md`에는 다음 형식으로 기록한다.

```markdown
## YYYY-MM-DD

### Previous Hypothesis

기존 가설

### New Hypothesis

변경된 가설

### Reason

변경 이유

### Evidence

새로운 증거

### Experiment Result

관련 Experiment 결과
```

목표는 최종 결론만 기록하는 것이 아니라

> 진로에 대한 생각이 어떤 증거 때문에 어떻게 변화했는지

추적하는 것이다.

---

# 24. Career Micro-Experiment Template

`experiments/experiment-template.md` 파일을 생성한다.

```markdown
# Career Micro-Experiment

## Experiment ID

EX-001

---

## Career Hypothesis

이번 실험에서 검증하려는 Career Hypothesis

---

## Question

이번 실험을 통해 어떤 진로 불확실성을 줄이려 하는가?

---

## Task

실제로 수행할 행동

---

## Estimated Time

예:

2 hours

---

## Expected Output

실험이 끝났을 때 만들어져야 하는 결과물

---

## Before Score

Interest:

Confidence:

Expected Fit:

각 항목 1~10

---

## Success Criteria

어떤 결과가 나오면 해당 Career Hypothesis를 지지하는가?

---

## Result

실제 수행 결과

---

## After Score

Interest:

Flow:

Difficulty:

Skill Fit:

Would Do Again:

각 항목 1~10

---

## Evidence

실험에서 실제로 관찰한 사실

---

## Interpretation

관찰 결과에 대한 해석

---

## Decision

다음 중 하나:

- Strengthen Hypothesis
- Maintain Hypothesis
- Weaken Hypothesis
- Reject Hypothesis
```

---

# 25. Career Action Dashboard

Week 1에서는 최소 기능 Dashboard를 구현한다.

Dashboard 목적:

> 현재 Career OS가 어디까지 진행됐는지 한눈에 확인하는 것

---

# 26. Dashboard — North Star

Dashboard 최상단에 다음 문장을 표시한다.

> 나에게 적합한 직무를 생각만으로 결정하지 않고
> 데이터 → AI 분석 → 현실 실험을 통해 검증한다.

---

# 27. Dashboard — Project Phase

다음 4개 Phase를 표시한다.

```text
ME
EXPLORE
TEST
DECIDE & ACT
```

각 Phase 상태:

```text
NOT STARTED
IN PROGRESS
DONE
```

현재 상태:

```yaml
ME: IN PROGRESS
EXPLORE: NOT STARTED
TEST: NOT STARTED
DECIDE_AND_ACT: NOT STARTED
```

---

# 28. Dashboard — Week 1 Checklist

초기 Checklist:

```text
[x] Career Dataset 기본 구조 설계
[x] 기존 경험 데이터 입력
[x] 관심 분야 정리
[x] 핵심 강점 가설 설정

[ ] 실패·비선호 경험 입력
[ ] Career Baseline 평가

[x] Career Agent Mission 작성
[x] Agent 판단기준 통일
[x] Agent 출력양식 통일

[ ] Codex Career Agent 실행
[ ] Claude Code Career Agent 실행
[ ] Gemini Career Agent 실행

[ ] Agent 결과 Repository 저장
```

Dashboard에서 완료 여부를 쉽게 수정할 수 있도록 설계한다.

가능하면 Checklist 데이터를 별도 JSON, YAML 또는 TypeScript data file로 분리한다.

---

# 29. Dashboard — Career Hypotheses

Career Hypothesis를 Card 형태로 표시한다.

각 Card 필드:

```text
Hypothesis ID
Career
Hypothesis
Score
Confidence
Status
Evidence Count
Experiment Count
```

Status 예시:

```text
NEW
EXPLORING
TESTING
SUPPORTED
WEAKENED
REJECTED
```

---

# 30. Dashboard — Career Experiments

각 Career Micro-Experiment에 다음 정보를 표시한다.

```text
Experiment ID
Career
Hypothesis
Status
Estimated Time
Before Score
After Score
Decision
```

상태:

```text
PLANNED
IN PROGRESS
DONE
```

---

# 31. Dashboard — Career Baseline

Career Baseline을 시각적으로 확인할 수 있게 한다.

항목:

- Career Direction Confidence
- Job Understanding
- Self Understanding
- Skill Confidence
- Execution Motivation
- Career Execution Clarity
- Global Career Confidence
- Career Anxiety

사용자 점수가 아직 입력되지 않았다면

```text
Not measured
```

라고 표시한다.

가능하면 향후 T0와 T1을 비교할 수 있는 데이터 구조를 사용한다.

예:

```typescript
{
  metric: "Career Direction Confidence",
  t0: null,
  t1: null
}
```

---

# 32. Dashboard — Progress

전체 프로젝트 진행률을 볼 수 있도록 한다.

예:

```text
Week 1 — ME             70%
Week 2 — EXPLORE         0%
Week 3 — TEST            0%
Week 4 — DECIDE & ACT    0%
```

현재 진행률은 Checklist 기반으로 자동 계산하는 것이 좋다.

---

# 33. Dashboard 기술 스택

기존 Repository에 이미 사용 중인 기술 스택이 있다면 그것을 우선 사용한다.

Repository가 비어 있다면 기본적으로 다음 Stack을 사용한다.

```text
Next.js
TypeScript
Tailwind CSS
```

필요한 경우:

```text
Recharts
```

등을 사용해 향후 Career Baseline 시각화를 준비할 수 있다.

단, Week 1에서 복잡한 Chart 구현 때문에 시간을 과도하게 사용하지 않는다.

---

# 34. Dashboard Design Principle

우선순위:

1. 기능
2. 정보 구조
3. 데이터 수정 용이성
4. 가독성
5. 디자인

디자인 목표:

- Clean
- Minimal
- Dashboard style
- Professional
- 빠르게 현재 상태 파악 가능

불필요하게 화려한 Animation은 사용하지 않는다.

---

# 35. README.md

README.md에는 다음 내용을 포함한다.

## Project Title

Career OS

## Project Description

이 프로젝트가 왜 존재하는지 설명.

## Core Process

```text
ME
↓
EXPLORE
↓
TEST
↓
DECIDE & ACT
```

## Method

```text
Personal Data
+
Multiple AI Agents
+
External Career Evidence
+
Real-world Experiments
=
Career Decision Evidence
```

## Repository Structure

현재 Folder Structure 설명.

## Current Status

현재 Week 1 진행 중.

## Dashboard

Dashboard 실행 방법.

예:

```bash
npm install
npm run dev
```

## Next Step

Week 2 — EXPLORE

---

# 36. Data Preservation Rule

Career OS는 생각의 변화를 기록하는 프로젝트다.

따라서 기존 Data를 임의로 삭제하거나 덮어쓰지 않는다.

중요한 변화는 History에 기록한다.

가능하면 다음 정보를 유지한다.

```text
Date
Previous State
New State
Reason
Evidence
```

---

# 37. Missing Data Handling

아직 사용자 데이터가 없는 영역은 임의로 생성하지 않는다.

다음 중 하나를 사용한다.

```text
UNKNOWN
TODO
null
```

예:

```yaml
salary_importance: null
```

잘못된 예:

```yaml
salary_importance: 8
```

사용자가 말하지 않은 내용을 추측해서 채우지 않는다.

---

# 38. Week 1 Completion Definition

이번 작업 완료 후 다음 상태가 되어야 한다.

```text
Personal Career Dataset        READY

Career Baseline Structure      READY

Friction Dataset Structure     READY

Career Agent Mission           READY

Evaluation Framework           READY

Agent Output Template          READY

Career Hypothesis Structure    READY

Experiment Framework           READY

Career Action Dashboard v0.1   READY
```

아직 사용자 입력이 필요한 내용은 `null` 또는 `UNKNOWN`으로 유지한다.

---

# 39. 이번 단계에서 하지 않을 것

현재는 Week 1이다.

따라서 아직 다음 작업을 본격적으로 진행하지 않는다.

- Career 최종 Ranking 확정
- 특정 직무를 최종 진로로 선정
- Career Hypothesis 최종 판단
- 12개월 Roadmap 확정
- Micro-Experiment 결과를 임의로 생성
- 실제 사용자 자기평가 점수를 임의로 입력

이번 Week 1의 핵심은

> Career OS가 앞으로 판단할 수 있도록 데이터와 시스템을 구축하는 것

이다.

---

# 40. Codex가 지금 수행할 작업

다음 순서대로 작업한다.

## Step 1 — Repository Audit

현재 Repository 전체 구조를 확인한다.

확인할 것:

- 기존 Framework
- 기존 Source Code
- package.json
- 기존 UI
- 사용 중인 CSS
- 기존 data 구조

기존 파일을 삭제하거나 대규모로 변경하기 전에 먼저 구조를 파악한다.

## Step 2 — Implementation Plan

현재 Repository를 기준으로 간단한 구현 계획을 작성한다.

다음 3개를 알려준다.

1. 유지할 기존 구조
2. 새로 생성할 파일
3. Dashboard 구현 방식

계획을 지나치게 길게 작성하지 않는다.

## Step 3 — Career OS Folder 생성

필요한 Folder와 File을 생성한다.

기본 구조:

```text
data/
agents/
hypotheses/
experiments/
research/
dashboard/
roadmap/
logs/
```

기존 Repository 구조에 맞게 적절하게 조정할 수 있다.

## Step 4 — Personal Career Dataset 저장

다음 파일을 생성한다.

```text
data/personal-career-dataset.md
data/personal-career-dataset.yaml
```

이 문서에서 제공한 사용자 데이터를 기반으로 작성한다.

Fact와 Hypothesis가 섞이지 않도록 구분한다.

## Step 5 — Baseline Data 생성

생성:

```text
data/career-baseline.yaml
data/friction-dataset.yaml
```

아직 사용자 점수가 없으므로 `null`을 사용한다.

## Step 6 — Agent Files 생성

생성:

```text
agents/career-agent-mission.md
agents/evaluation-framework.md
```

본 문서의 Career Agent Mission과 Evaluation Framework를 기준으로 한다.

## Step 7 — Hypothesis Files 생성

생성:

```text
hypotheses/career-hypotheses.md
hypotheses/hypothesis-history.md
```

현재 H1, H2, H3는 초기 Hypothesis로 기록한다.

Status는 모두:

```text
NEW
```

또는:

```text
UNTESTED
```

로 설정한다.

## Step 8 — Experiment Files 생성

생성:

```text
experiments/README.md
experiments/experiment-template.md
experiments/results/
```

아직 실제 결과는 생성하지 않는다.

## Step 9 — Dashboard v0.1 구현

Dashboard에 최소한 다음 Section을 구현한다.

1. North Star
2. Project Phase
3. Week 1 Checklist
4. Career Hypotheses
5. Career Baseline
6. Career Experiments
7. Project Progress

현재 데이터가 `null`이면 적절하게 `Not measured`로 처리한다.

## Step 10 — README 작성

README.md에 다음을 작성한다.

- Career OS 목적
- 프로젝트 Process
- Repository Structure
- 현재 Week
- Dashboard 실행법
- 다음 단계

## Step 11 — Build / Error Check

구현 완료 후 가능한 경우 다음을 실행한다.

```bash
npm install
npm run build
```

또는 기존 Repository에 맞는 Build Command를 사용한다.

Error가 발생하면 해결한다.

---

# 41. 최종 Implementation Report

작업 완료 후 다음 형식으로 보고한다.

```markdown
# Implementation Report

## 1. Repository Analysis

기존 Repository 구조 요약

## 2. Created

생성한 파일 및 Folder

## 3. Modified

수정한 기존 파일

## 4. Career Dataset

구현한 데이터 구조

## 5. Dashboard

구현한 Dashboard 기능

## 6. Missing User Data

추가로 사용자가 입력해야 할 정보

## 7. Build Result

Build 성공 여부

## 8. Next Recommended Action

다음 단계에서 가장 먼저 수행해야 할 작업
```

---

# 42. Codex 실행 원칙

작업 중 다음 원칙을 유지한다.

- 기존 코드를 임의로 삭제하지 않는다.
- 불필요한 대규모 Refactoring을 하지 않는다.
- 정보가 없으면 추측하지 않는다.
- 사용자 데이터와 Agent 추론을 명확히 구분한다.
- 구현 가능한 부분은 불필요하게 사용자에게 재질문하지 않고 진행한다.
- 단, 사용자의 자기평가처럼 본인이 직접 결정해야 하는 값은 임의 생성하지 않는다.
- Dashboard는 앞으로 데이터가 추가되기 쉬운 구조로 만든다.
- Week 2, Week 3, Week 4 확장을 고려한다.

---

# 43. 최종 목표

Career OS의 목적은 완벽한 진로 하나를 즉시 찾아내는 것이 아니다.

최종 목표는 다음과 같다.

> Career uncertainty를 작은 단위의 데이터와 현실 검증을 통해 지속적으로 줄이는 것.

따라서 시스템은

```text
DATA
↓
HYPOTHESIS
↓
EVIDENCE
↓
EXPERIMENT
↓
REFLECTION
↓
DECISION
↓
ACTION
```

의 반복 구조를 지원해야 한다.

---

# START

이제 현재 Repository를 분석하라.

먼저 다음 세 가지를 짧게 제시하라.

1. 현재 Repository 상태
2. 생성/수정할 파일
3. 구현 계획

그 후 별도의 불필요한 승인 요청 없이 Week 1 Career OS 구현을 시작하라.

기존 파일을 훼손하지 말고,
사용자 입력이 없는 값은 `UNKNOWN`, `TODO`, 또는 `null`로 유지하라.
