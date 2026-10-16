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
