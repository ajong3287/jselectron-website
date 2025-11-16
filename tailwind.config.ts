import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // JS Electron 공식 컬러 팔레트 (Story 5.1 확정)
        'primary-blue': '#007AFF', // CTA 및 강조색
        'dark-text': '#1F1F1F',    // 제목 텍스트
        'light-text': '#333333',   // 본문 텍스트
        'accent-blue': '#F0F7FF',  // 배경 강조색 (bg-blue-50 대체)
      },
      fontFamily: {
        // Pretendard 폰트를 위한 fallback 설정 (로컬 환경 또는 CDN 로드 가정)
        sans: ['Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
