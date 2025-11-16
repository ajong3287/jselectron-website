// src/types/index.ts
export interface ContactInquiry {
  name: string;
  company: string;
  contact: string;
  email?: string | undefined; // 선택적 필드
  message: string;
}
