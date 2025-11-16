// src/lib/zod.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: "성함을 입력해주세요." }),
  company: z.string().min(2, { message: "회사명을 입력해주세요." }),
  contact: z.string().min(10, { message: "정확한 연락처를 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }).optional().or(z.literal("")),
  message: z.string().min(10, { message: "문의 내용을 10자 이상 입력해주세요." }),
});
