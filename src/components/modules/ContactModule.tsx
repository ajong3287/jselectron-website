'use client'; // 클라이언트 컴포넌트로 선언

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactSchema } from '@/lib/zod'; // Zod 스키마 import
import { useState } from 'react';

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactModule() {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setFormMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormMessage({ type: 'success', text: result.message });
        reset(); // 폼 초기화
      } else {
        setFormMessage({ type: 'error', text: result.message || '폼 제출에 실패했습니다.' });
      }
    } catch (error) {
      setFormMessage({ type: 'error', text: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
      {/* 이름 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">성함 (필수)</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* 회사명 */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">회사명 (필수)</label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className={`mt-1 block w-full px-3 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
      </div>

      {/* 연락처 */}
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">연락처 (필수)</label>
        <input
          type="text"
          id="contact"
          placeholder="010-1234-5678"
          {...register('contact')}
          className={`mt-1 block w-full px-3 py-2 border ${errors.contact ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.contact && <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>}
      </div>

      {/* 이메일 (선택) */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 (선택)</label>
        <input
          type="email"
          id="email"
          placeholder="name@company.com"
          {...register('email')}
          className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* 문의 내용 */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">문의 내용 (필수)</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* 제출 버튼 및 상태 메시지 */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          {isLoading ? '전송 중...' : '문의하기'}
        </button>
      </div>

      {formMessage && (
        <div className={`p-4 rounded-md ${formMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          <p>{formMessage.text}</p>
        </div>
      )}
    </form>
  );
}
