# JS일렉트로닉 ERP 시스템

## 개요
제이에스일렉트로닉을 위한 소형 ERP 시스템

## 주요 기능
- Excel 파일 업로드 및 분석
- 매출 데이터 관리
- 거래처별 매출 추적
- 월별/연도별 통계
- 데이터 시각화

## 기술 스택
- Node.js & Express
- Excel 처리 (xlsx)
- 파일 업로드 (multer)

## 실행 방법
```bash
npm install
npm start
```

서버는 http://localhost:4000 에서 실행됩니다.

## 파일 구조
- `server.js` - 메인 서버 파일
- `uploads/` - Excel 파일 업로드 디렉토리
- `clients/` - 거래처 관련 파일