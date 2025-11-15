# 크로스 프로젝트 리소스 공유 구조

**버전**: 1.0
**작성일**: 2025-11-12
**목적**: 26개 프로젝트 간 효율적 리소스 재사용 시스템

---

## 폴더 구조

```
/Users/elicon_mark/Gemini_Projects/
├── _shared/                      # 공유 리소스 루트
│   ├── components/              # UI 컴포넌트
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroTitle.tsx
│   │   │   ├── HeroSubtitle.tsx
│   │   │   └── HeroCTA.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   └── NewsletterForm.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   │
│   ├── patterns/                # 개발 패턴
│   │   ├── api-patterns/
│   │   │   ├── rest-client.ts
│   │   │   └── error-handling.ts
│   │   ├── state-management/
│   │   │   └── zustand-patterns.ts
│   │   └── auth/
│   │       └── jwt-auth.ts
│   │
│   ├── config-templates/        # 설정 템플릿
│   │   ├── next.config.template.js
│   │   ├── tailwind.config.template.js
│   │   └── playwright.config.template.ts
│   │
│   ├── design-system/           # 엘리콘 디자인 시스템
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── components.css
│   │
│   ├── docs-templates/          # 문서 템플릿
│   │   ├── project-brief.template.md
│   │   ├── prd.template.md
│   │   ├── front-end-spec.template.md
│   │   └── architecture.template.md
│   │
│   ├── utils/                   # 유틸리티 함수
│   │   ├── date-utils.ts
│   │   ├── string-utils.ts
│   │   └── validation.ts
│   │
│   └── README.md                # 공유 리소스 가이드
│
├── 00_elicon_main/
├── 01_wing/
├── 02_cocolic/
├── 03_seanex/
├── 04_marketing_park/          # 패턴 원본 프로젝트
└── ...
```

---

## 리소스 등록 시스템

### resource-registry.yaml

```yaml
# 공유 리소스 레지스트리
# _shared/ 폴더의 모든 리소스 추적

version: 1.0
last_updated: 2025-11-12

components:
  - id: hero-section
    name: "Hero Section (Composable)"
    path: "_shared/components/hero/"
    type: react-component
    framework: next.js
    status: validated
    source_project: "04_marketing_park"
    created_date: "2025-11-12"
    last_updated: "2025-11-12"
    used_by:
      - "04_marketing_park"
    reusable_by:
      - "01_wing"
      - "02_cocolic"
      - "03_seanex"
      - "00_elicon_main"
    estimated_time_saving: "2h per project"
    dependencies:
      - tailwindcss
      - framer-motion
    documentation: "_shared/components/hero/README.md"

  - id: contact-form
    name: "Contact Form (React Hook Form + Zod)"
    path: "_shared/components/forms/ContactForm.tsx"
    type: react-component
    framework: next.js
    status: planned
    source_project: "04_marketing_park"
    estimated_completion: "2025-11-18"
    used_by: []
    reusable_by: "all web projects"
    estimated_time_saving: "3h per project"
    dependencies:
      - react-hook-form
      - zod
      - tailwindcss

patterns:
  - id: elicon-standard-v1
    name: "Elicon Standard v1.0"
    path: "_shared/docs-templates/"
    type: documentation-pattern
    status: validated
    source_project: "04_marketing_park"
    description: "4개 docs 파일 + Story 기반 개발"
    used_by:
      - "04_marketing_park"
    applies_to: "all 26 projects"
    components:
      - "project-brief.template.md"
      - "prd.template.md"
      - "front-end-spec.template.md"
      - "architecture.template.md"

  - id: next-tailwind-setup
    name: "Next.js 14 + Tailwind CSS 4"
    path: "_shared/config-templates/"
    type: tech-stack-pattern
    status: validated
    source_project: "04_marketing_park"
    used_by:
      - "04_marketing_park"
    reusable_by:
      - "01_wing"
      - "02_cocolic"
      - "00_elicon_main"
    components:
      - "next.config.template.js"
      - "tailwind.config.template.js"
      - "package.json.template"

design_systems:
  - id: elicon-design-system
    name: "Elicon Design System"
    path: "_shared/design-system/"
    status: in_development
    source_projects:
      - "01_wing"
      - "02_cocolic"
    description: "통합 디자인 시스템 (색상, 타이포, 컴포넌트)"
    applies_to: "all elicon web projects"
```

---

## 사용 워크플로우

### 패턴 1: 컴포넌트 재사용

```yaml
scenario: Wing 프로젝트에서 Hero Section 재사용

steps:
  1. 레지스트리 확인:
     command: "*resource-map"
     output: "Hero Section available (MarketingPark 검증 완료)"

  2. 가져오기:
     command: "cp -r _shared/components/hero/ 01_wing/components/"
     or:
     command: "import { HeroSection } from '@shared/components/hero'"

  3. 커스터마이징:
     - Wing 브랜드 색상 적용
     - 낚시 관련 이미지로 교체
     - CTA 텍스트 변경

  4. 검증:
     - 테스트 실행
     - 반응형 확인
     - 접근성 검증

  5. 피드백:
     - 개선 사항 발견 시 _shared/에 기여
     - used_by 업데이트
```

### 패턴 2: 프로젝트 시작 시 표준 적용

```yaml
scenario: 새 프로젝트 (Seanex) 시작

steps:
  1. 템플릿 복사:
     command: |
       mkdir 03_seanex/docs
       cp _shared/docs-templates/*.template.md 03_seanex/docs/
       rename .template.md to .md

  2. 메타데이터 작성:
     - project-brief.md 작성
     - PRD 초안 작성
     - 아키텍처 결정

  3. 기술 스택 재사용:
     - Next.js + Tailwind 설정 복사
     - package.json 템플릿 사용
     - 검증된 의존성 버전 사용

  4. 컴포넌트 재사용 계획:
     - Hero Section (필수)
     - Contact Form (필수)
     - Footer (옵션)
```

### 패턴 3: 패턴 추출 및 공유

```yaml
scenario: MarketingPark에서 성공 패턴 추출

trigger: Epic 1 완료

steps:
  1. 패턴 식별:
     ai: "*extract-patterns 04_marketing_park Epic1"
     output: |
       발견된 재사용 가능 패턴:
       - Hero Section (4개 컴포넌트)
       - Next.js SSG 설정
       - Playwright 테스트 구조

  2. 검증:
     - 다른 프로젝트 적용 가능성 체크
     - 일반화 가능 여부 판단
     - 의존성 분석

  3. 추출:
     - _shared/components/에 복사
     - 프로젝트 특화 코드 제거
     - 문서화 (README.md)

  4. 등록:
     - resource-registry.yaml 업데이트
     - reusable_by 프로젝트 목록 작성
     - estimated_time_saving 계산

  5. 공지:
     - 다른 프로젝트에 알림
     - 사용 가이드 공유
```

---

## 자동화 명령어

### Portfolio Manager 통합

```yaml
commands:
  *resource-map:
    description: "재사용 가능 리소스 맵 표시"
    output: |
      🗺️ Cross-Project Resource Map

      === 사용 가능 컴포넌트 ===
      1. Hero Section (MarketingPark → Wing, Cocolic, Seanex)
         시간 절약: 2h × 3 = 6h

      2. Contact Form (개발 중, 11/18 완료 예정)
         시간 절약: 3h × 10 = 30h

      === 사용 가능 패턴 ===
      1. Elicon Standard v1.0 (검증 완료)
         적용: 26개 전체 프로젝트

      2. Next.js + Tailwind Setup (검증 완료)
         적용: Wing, Cocolic, Elicon Main

      === 중복 작업 감지 ===
      ⚠️ Wing, Cocolic, Seanex 모두 Contact Form 별도 개발 계획
      → 해결: MarketingPark 패턴 대기 (30h 절약)

  *extract-patterns:
    description: "프로젝트에서 재사용 패턴 추출"
    syntax: "*extract-patterns <project_id> [scope]"
    example: "*extract-patterns 04_marketing_park Epic1"
    output: |
      🔍 패턴 추출 분석: MarketingPark Epic1

      재사용 가능 발견:
      1. ✅ Hero Section (4 컴포넌트)
         적용 가능: Wing, Cocolic, Seanex, Elicon Main
         시간 절약: 2h × 4 = 8h

      2. ✅ Next.js SSG Setup
         적용 가능: 모든 Next.js 프로젝트
         시간 절약: 1h × 5 = 5h

      3. ⚠️ MarketingPark 특화 컴포넌트
         재사용 불가: 비즈니스 로직 포함

      추출 시작? (Y/N)

  *apply-pattern:
    description: "다른 프로젝트에 패턴 적용"
    syntax: "*apply-pattern <pattern_id> <target_project>"
    example: "*apply-pattern hero-section 01_wing"
    output: |
      🎯 패턴 적용: Hero Section → Wing

      작업:
      1. 컴포넌트 복사 (_shared/components/hero/ → 01_wing/components/)
      2. Wing 브랜드 색상 적용
      3. 낚시 관련 이미지 교체
      4. 테스트 실행

      예상 시간: 30분 (직접 개발 대비 75% 절약)

      시작? (Y/N)
```

---

## 버전 관리

### 공유 리소스 버전닝

```yaml
versioning_strategy:
  components:
    format: "semver (1.0.0)"
    breaking_changes: major++
    new_features: minor++
    bug_fixes: patch++

  example:
    hero-section:
      v1.0.0: "초기 릴리즈 (MarketingPark)"
      v1.1.0: "애니메이션 옵션 추가 (Wing 피드백)"
      v1.1.1: "반응형 버그 수정"
      v2.0.0: "API 변경 (props 구조 개선)"

  compatibility:
    rule: "하위 호환성 유지 (major 버전만 breaking)"
    migration_guide: "_shared/components/hero/MIGRATION.md"
```

---

## 성과 측정

### 리소스 재사용 KPI

```yaml
metrics:
  time_saved:
    formula: "재사용 횟수 × 컴포넌트별 시간 절약"
    target: ">50h per quarter"

  reuse_rate:
    formula: "재사용된 컴포넌트 / 전체 컴포넌트"
    target: ">30%"

  duplication_prevention:
    formula: "중복 방지된 작업 시간"
    target: ">20h per quarter"

  pattern_adoption:
    formula: "표준 패턴 적용 프로젝트 / 전체 프로젝트"
    target: ">80%"
```

---

## 거버넌스

### 기여 규칙

```yaml
contribution_guidelines:
  who_can_contribute:
    - 서대표
    - AI 에이전트 (검증 후)

  contribution_process:
    1. 패턴 제안 (AI 또는 서대표)
    2. 검증 (최소 1개 프로젝트 성공)
    3. 일반화 (프로젝트 특화 코드 제거)
    4. 문서화 (README + 사용 예시)
    5. 등록 (resource-registry.yaml)
    6. 공지 (관련 프로젝트)

  quality_gates:
    - 테스트 커버리지 >80%
    - 문서화 완료
    - 최소 1개 프로젝트 검증
    - 타입 안전성 (TypeScript)
```

---

## 마이그레이션 계획

### Phase 1: 기반 구축 (Week 1)
```
- [ ] _shared/ 폴더 생성
- [ ] resource-registry.yaml 초기화
- [ ] docs-templates/ 이동 (Elicon Standard v1.0)
```

### Phase 2: 첫 컴포넌트 추출 (Week 2)
```
- [ ] MarketingPark Hero Section 추출
- [ ] Wing에 적용 및 검증
- [ ] 피드백 반영 및 v1.0.0 릴리즈
```

### Phase 3: 확산 (Week 3-4)
```
- [ ] Cocolic에 Hero Section 적용
- [ ] Contact Form 추출
- [ ] 디자인 시스템 초안
```

### Phase 4: 표준화 (Week 5-6)
```
- [ ] 10개 프로젝트에 Elicon Standard 적용
- [ ] 재사용 KPI 측정
- [ ] 개선 사항 반영
```

---

**다음**: team-fullstack-elicon-v2.txt 통합 제작
