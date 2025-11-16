# 🎨 JS Electron Figma Design System Specification (Story 6.1)

**목표**: 개발 코드(tailwind.config.ts)와 Figma 디자인 환경 간의 시각적 일관성 확보.

## 1. Color Styles (색상 팔레트)

Story 5.1에서 확정된 4가지 공식 컬러를 Figma Color Styles로 등록합니다. 이는 CSS 변수명과 일치해야 합니다.

| Style Name | HEX Code | 사용 용도 |
| :--- | :--- | :--- |
| **Primary Blue** | `#007AFF` | CTA 버튼, 핵심 링크, 강조 아이콘 (브랜드 핵심 컬러) |
| **Accent Blue** | `#F0F7FF` | 섹션 배경색, 강조 영역 (`bg-blue-50` 대체) |
| **Dark Text** | `#1F1F1F` | H1, H2 등 제목 텍스트, 네비게이션 |
| **Light Text** | `#333333` | 본문 텍스트, 일반 텍스트 |

## 2. Typography Styles (폰트 스타일)

Pretendard 폰트(fallback: sans-serif)를 기반으로 핵심 텍스트 스타일을 정의합니다.

| Style Name | Size/Weight | Line Height | CSS Mapping | 용도 |
| :--- | :--- | :--- | :--- | :--- |
| **Heading/H1** | 3.5rem (56px) / Bold | 120% | `text-6xl` | Hero 섹션 메인 헤드라인 (모바일: 2.5rem) |
| **Heading/H2** | 2.5rem (40px) / Bold | 125% | `text-4xl` | 주요 섹션 타이틀 (예: '5대 파트너사') |
| **Heading/H3** | 1.5rem (24px) / Semibold | 130% | `text-2xl` | 카드 타이틀, 부제목 |
| **Body/Large** | 1.125rem (18px) / Regular | 160% | `text-lg` | 섹션 설명, 주요 안내문 |
| **Body/Base** | 1rem (16px) / Regular | 150% | `text-base` | 일반 본문 텍스트 |
| **Button/CTA** | 1.125rem (18px) / Medium | 100% | `text-lg` | 메인 Call-to-Action 버튼 |

## 3. 핵심 컴포넌트 목록 (Component Drafts)

Figma에서 컴포넌트 라이브러리로 구축해야 할 최소 기능 단위 목록입니다. (Story 6.2에서 실제 디자인 진행)

1.  **Button**: Primary (Blue), Secondary (White/Outline), Tertiary (Text Link). (Size: Large, Medium)
2.  **InputField/TextArea**: 문의 양식에 사용되는 입력 필드 및 텍스트 영역.
3.  **PartnerCard**: 5대 제조사 페이지 및 홈 페이지에 사용되는 로고, 설명 카드를 통합한 컴포넌트.
4.  **Header & Footer**: 메인 레이아웃 컴포넌트.
5.  **Icon/Feature Block**: 특징 설명에 사용되는 아이콘 + 텍스트 조합 블록.
