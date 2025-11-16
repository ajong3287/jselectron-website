// src/lib/mailer.ts
import { ContactInquiry } from "@/types";

// TODO: .env.local의 RESEND_API_KEY 등을 사용하여 실제 이메일 발송 로직 구현
export async function sendEmail(data: ContactInquiry) {
  console.log("--- 이메일 발송 시뮬레이션 ---");
  console.log("To: admin@jselectron.com (대표님 이메일)");
  console.log("From: webmaster@jselectron.com");
  console.log("Subject: 신규 간편 문의 접수");
  console.log("Body:", JSON.stringify(data, null, 2));
  console.log("-------------------------------");

  // 실제 API 호출 (예: Resend)
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({...});

  return { success: true, message: "Email Sent (Simulation)" };
}
