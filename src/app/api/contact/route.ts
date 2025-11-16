// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/zod';
import { sendEmail } from '@/lib/mailer';
import { sendSms } from '@/lib/sms';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod 유효성 검사
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { status: 'error', message: '입력 형식이 올바르지 않습니다.', errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const contactData = validation.data;

    // 2. 이메일 및 SMS 발송 (병렬 처리)
    // TODO: 실제 운영 시 .env.local에 API 키 설정 필요
    const [emailResult, smsResult] = await Promise.all([
      sendEmail(contactData),
      sendSms(contactData)
    ]);

    if (!emailResult.success || !smsResult.success) {
      // 둘 중 하나라도 실패하면 500 에러 (운영자가 확인해야 함)
      console.error("알림 발송 실패:", { emailResult, smsResult });
      return NextResponse.json(
        { status: 'error', message: '알림 서버 오류로 접수에 실패했습니다. 전화로 문의해주세요.' },
        { status: 500 }
      );
    }

    // 3. 성공 응답
    return NextResponse.json(
      { status: 'success', message: '문의가 성공적으로 접수되었습니다. 전문가가 곧 연락드리겠습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: 'error', message: '알 수 없는 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
