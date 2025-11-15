# Front-end Architecture: 제이에스일렉트론 (v1.0)

**문서 ID**: `02_js_electronics/docs/front-end-architecture.md`
**작성자**: Architect (Winston)
**승인자**: (대표님)

## 1. Introduction (소개)

* **소개**: 이 문서는 '제이에스일렉트론' B2B 웹사이트의 전체 풀스택 아키텍처를 정의합니다. '정직하고 안정적인' 기업 이미지를 기술적으로 구현하기 위해 Next.js 14, Tailwind CSS, TypeScript 스택을 기반으로 설계되었습니다.
* **스타터 템플릿**: **"Greenfield (신규 구축) - Elicon Standard Pattern 적용"**. `_shared/` 폴더의 검증된 Next.js/Tailwind 패턴을 표준으로 채택합니다.

## 2. High Level Architecture (고수준 아키텍처)

* **기술 요약**: **Next.js 14** 기반 **'정적 우선(Static-First) Jamstack'** 구조. 정적 페이지(SSG)로 즉각적인 로딩 속도 보장. '간편 문의'는 Next.js API Route(서버리스)로 처리.
* **플랫폼**: **Vercel**. Next.js에 최적화된 배포/호스팅/CDN/보안/자동 SSL 제공.
* **저장소**: **Monorepo** (PRD에서 확정).
* **다이어그램**:
    ```mermaid
    graph TD
        A[방문자 (B2B 고객)] --> B(Vercel Edge Network / CDN);
        B --> C[Next.js 정적 페이지<br>(홈, 회사소개, 제품소개)];
        B --> D[Next.js API Route<br>(/api/contact)];
        D --> E[Email API (Resend)];
        D --> F[SMS API (Twilio/Aligo)];

        style C fill:#f9f9f9,stroke:#333
        style D fill:#f9f9f9,stroke:#333
        style E fill:#eee,stroke:#999
        style F fill:#eee,stroke:#999
    ```
* **아키텍처 패턴**: Jamstack, Component-Based UI.

## 3. Tech Stack (기술 스택)

| 카테고리 | 기술 | 버전 | 목적 | 비고 (재사용 패턴) |
| :--- | :--- | :--- | :--- | :--- |
| **Framework** | **Next.js** | 14.x | React 기반 풀스택 프레임워크 (Jamstack) | `_shared/config-templates` |
| **Language** | **TypeScript** | 5.x | 코드 안정성 및 '불량 제로화' | (표준 스택) |
| **Styling** | **Tailwind CSS** | 4.x | '정직하고 명확한' UI 구축 | `_shared/config-templates` |
| **Platform** | **Vercel** | - | 배포/호스팅/CDN/보안/SSL | (대표님 승인) |
| **Form Handling**| **React Hook Form + Zod** | (최신) | '간편 문의' 폼의 안정적인 유효성 검사 | `_shared/components/forms` |
| **Testing** | **Playwright** | (최신) | PRD의 Unit/Integration 테스트 요구사항 충족 | `_shared/config-templates` |
| **CI/CD** | Vercel Git Integration| - | GitHub 연동 시 자동 배포 | (Vercel 기본 기능) |
| **Notifications** | Resend (Email), Twilio (SMS)| (최신) | 관리자 즉각 알림 | (PRD Epic 3.1 반영) |

## 4. Data Models (데이터 모델)

* **Model Name**: `ContactInquiry` (문의 접수)
* **Storage**: DB 저장 안 함. Next.js API Route를 통해 **이메일과 SMS로 즉시 발송**.
* **TypeScript Interface**:
    ```typescript
    interface ContactInquiry {
      name: string;         // 담당자명 (필수)
      company: string;      // 회사명 (필수)
      contact: string;      // 연락처 (필수)
      email?: string;       // 이메일 (선택)
      message: string;      // 문의 내용 (필수)
    }
    ```

## 5. API Specification (API 명세)

* **Endpoint**: `POST /api/contact`
* **Purpose**: '간편 문의' 양식 데이터를 받아, 대표님께 이메일과 SMS 알림을 동시 발송.
* **Request Body**: `ContactInquiry` 인터페이스 참조 (이름, 회사, 연락처, 메시지 필수).
* **Success Response (200)**: `{"status": "success", "message": "문의가 성공적으로 접수되었습니다. 전문가가 곧 연락드리겠습니다."}`
* **Error Response (400)**: `{"status": "error", "message": "필수 항목(성함, 업체명, 연락처, 문의 내용)을 확인해주세요."}`

## 6. Components (컴포넌트)

(UI/UX 명세서 5번 항목과 동일한 컴포넌트 리스트 및 관계도)
* **Layout**: `Header`, `Footer`
* **UI (Atoms)**: `Button`, `Logo`, `InputField`
* **Module (Organisms)**: `Hero`, `PartnerLogoGrid`, `ProductCard`, `ContactModule`

## 7. Unified Project Structure (통합 프로젝트 구조)

```plaintext
/02_js_electronics/
├── /docs/                # (기획 문서 4종)
│   ├── project-brief.md
│   ├── prd.md
│   ├── front-end-spec.md
│   └── fullstack-architecture.md
├── /src/
│   ├── /app/
│   │   ├── /                 # 홈 (page.tsx)
│   │   ├── /about/           # 회사 소개 (page.tsx)
│   │   ├── /products/        # 제품 소개 (page.tsx)
│   │   │   ├── /sinotech/    # (page.tsx)
│   │   │   ├── /mup/         # (page.tsx)
│   │   │   ├── /celduc/      # (page.tsx)
│   │   │   ├── /lithotop/    # (page.tsx)
│   │   │   └── /amos/        # (page.tsx)
│   │   ├── /contact/         # 문의하기 (page.tsx)
│   │   ├── /api/
│   │   │   ├── /contact/     # POST /api/contact (route.ts)
│   │   ├── layout.tsx        # 전역 레이아웃 (Header/Footer 적용)
│   │   └── global.css        # Tailwind CSS
│   ├── /components/
│   │   ├── /layout/          # Header.tsx, Footer.tsx
│   │   ├── /ui/              # Button.tsx, InputField.tsx, Logo.tsx
│   │   └── /modules/         # Hero.tsx, PartnerLogoGrid.tsx, ProductCard.tsx, ContactModule.tsx
│   ├── /lib/                 # 이메일(mailer.ts), SMS(sms.ts) 발송 로직
│   └── /types/               # index.ts (ContactInquiry 타입)
├── /public/                  # /logos/ (5대 제조사 로고), favicon.ico
├── .eslintrc.json            # (Elicon 표준)
├── tailwind.config.ts        # (Elicon 표준)
├── next.config.mjs
└── package.json
```

## 8. Development Workflow (개발 워크플로우)

* **Local Setup**: git clone, npm install, .env.local 파일 생성 (API 키 입력)
* **Commands**: npm run dev, npm run build, npm run test, npm run lint
* **환경 변수**: RESEND_API_KEY, SMS_API_KEY, SMS_API_SECRET, SMS_SENDER_PHONE, SMS_RECEIVER_PHONE

## 9. Deployment Architecture (배포 아키텍처)

* **Strategy**: 통합 배포 (Next.js Jamstack + API Routes).
* **Platform**: Vercel
* **CI/CD**: Vercel Git Integration. main 브랜치 푸시 시 자동 빌드/테스트/배포 실행.
* **Environments**: Production (main 브랜치), Preview (개발 브랜치 자동 생성).

## 10. Security and Performance (보안 및 성능)

* **Security**: Vercel 자동 SSL(HTTPS), POST /api/contact API에 Rate Limiting 및 Zod 유효성 검사 적용, API 키는 Vercel 환경 변수에 안전하게 저장.
* **Performance**: Jamstack(SSG)을 통한 즉각적인 페이지 로딩(NFR1 충족), Vercel Image 컴포넌트를 통한 이미지 자동 최적화(WebP).

## 11. Checklist Results Report (아키텍처 검증 리포트)

* **준비 상태**: 높음 (High)
* **강점**: '신뢰도'와 '빠른 속도' 목표를 Vercel/Jamstack으로 완벽하게 구현. '전화상담/SMS 알림' 전략을 아키텍처에 일관되게 반영. Elicon 표준 패턴 재사용으로 개발 효율 극대화.
* **AI 준비성**: 높음. 명확한 폴더 구조와 컴포넌트 정의, API 명세는 AI 개발 에이전트가 즉시 작업하기에 적합함.

## 12. Next Steps (다음 단계)

* (완료) PM(John)이 Arch 변경 사항(간편폼, SMS)을 prd.md Epic 3.1에 반영.
* (완료) PO(Sarah)가 4개 기획 문서 최종 검증 완료.
* (진행) **Story Manager (SM)**에게 Handoff하여 1.1.Foundation-Setup.md 개발 시작.
