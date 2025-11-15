# Gemini 인터뷰용 컨텍스트 파일 - 제이에스일렉트론

**날짜**: 2025-11-13
**목적**: 02_js_electronics 홈페이지 심층 인터뷰 준비

---

## 🏢 프로젝트 개요

### 제이에스일렉트론 (JS Electron)
- **업종**: 전자부품 유통/도매
- **기존 작업**: ERP 개발 (포기) → _archive_erp 백업
- **새 방향**: 회사 홈페이지 개발
- **목표**: B2B 고객 유치, 전문성 표현

---

## 📋 파일 목록 (5개)

### 1. team-fullstack-elicon-v2.txt (486KB)
**설명**: 엘리콘 강화 팀 풀스택 템플릿
**용도**: 프로젝트 구조, 개발 표준
**핵심**: 52개 리소스, BMad-Method 기반

### 2. portfolio-mgr.md (12KB)
**설명**: Portfolio Manager 에이전트
**용도**: 프로젝트 관리 방법
**핵심**: Tier 시스템, 우선순위

### 3. ai-collaboration-protocol.md (14KB)
**설명**: AI 협업 프로토콜
**용도**: Gemini + Claude 협업
**핵심**: 3-레벨 의사결정

### 4. portfolio-metadata.yaml (11KB)
**설명**: 26개 프로젝트 메타데이터
**용도**: 엘리콘 전체 이해
**핵심**: 프로젝트 분류, 관계 맵

### 5. shared-resources-structure.md (11KB)
**설명**: 리소스 공유 구조
**용도**: 패턴 재사용
**핵심**: 04번 템플릿 활용

---

## 🎯 Gemini 인터뷰 시작 프롬프트

```markdown
안녕 Gemini,

제이에스일렉트론 홈페이지를 만들려고 해.

먼저 이 5개 파일을 읽어줘:
1. team-fullstack-elicon-v2.txt
2. portfolio-mgr.md
3. ai-collaboration-protocol.md
4. portfolio-metadata.yaml
5. shared-resources-structure.md

제이에스일렉트론은:
- 전자부품 유통/도매 회사
- B2B 비즈니스
- 기존 ERP 개발 포기 → 홈페이지로 전환

목표:
- B2B 고객 유치
- 전문성과 신뢰도 표현
- 제품 카탈로그 온라인화
- 문의/견적 시스템

04_marketing_park처럼 PRD 4개 문서를 만들고 싶어.

준비됐어?
```

---

## 🎓 핵심 질문 가이드

### Phase 1: 현황 파악 (30분)
```
Q: "제이에스일렉트론은 어떤 회사?"
Q: "주요 고객은?"
Q: "경쟁사는?"
Q: "현재 문제점은?"
```

### Phase 2: 목표 정의 (30분)
```
Q: "홈페이지 목적은?"
Q: "성공 지표는?"
Q: "1년 후 모습은?"
Q: "우선순위는?"
```

### Phase 3: 전략 수립 (30분)
```
Q: "페이지 구성은?"
Q: "제품 카탈로그 어떻게?"
Q: "견적 시스템은?"
Q: "SEO 전략은?"
```

### Phase 4: 요구사항 도출 (30분)
```
Q: "필수 기능은?"
Q: "선택 기능은?"
Q: "기술 스택은?"
Q: "제약사항은?"
```

---

## 📊 기대 결과

### 2시간 인터뷰 후

**산출물**:
1. prd.md
2. project-brief.md
3. front-end-spec.md
4. front-end-architecture.md

**저장 위치**:
```
~/Gemini_Projects/02_js_electronics/docs/
```

---

## 💡 참고사항

### 전자부품 유통 특성
- **B2B 중심**: 기업 고객 대상
- **제품 다양성**: 수천 개 SKU
- **견적 중요**: 실시간 견적 필요
- **전문성**: 기술 스펙 상세 표시

### 경쟁사 벤치마크 키워드
- "전자부품 도매"
- "전자부품 유통"
- "B2B 전자부품"

### 필수 페이지 (예상)
- 회사 소개
- 제품 카탈로그
- 견적 문의
- 고객 지원
- 파트너사

---

## 🚀 다음 단계

### Gemini 완료 후
1. 4개 문서를 docs/ 폴더에 저장
2. Claude Code에게 알림
3. Next.js 프로젝트 생성
4. 구현 시작

---

**작성자**: Claude
**용도**: Gemini 인터뷰 컨텍스트
**프로젝트**: 02_js_electronics
