// src/lib/sms.ts
import { ContactInquiry } from "@/types";

// TODO: .env.local의 SMS API 키 등을 사용하여 실제 SMS 발송 로직 구현
export async function sendSms(data: ContactInquiry) {
  const smsBody = `[JS일렉트론] 신규 문의 접수: ${data.company} (${data.name}) / ${data.contact}`;

  console.log("--- SMS 발송 시뮬레이션 ---");
  console.log(`To: ${process.env.SMS_RECEIVER_PHONE || '대표님 휴대폰'}`);
  console.log(`Body: ${smsBody}`);
  console.log("---------------------------");

  // 실제 API 호출 (예: Twilio/Aligo)
  // const client = new Twilio(process.env.SMS_API_KEY, ...);
  // await client.messages.create({...});

  return { success: true, message: "SMS Sent (Simulation)" };
}
