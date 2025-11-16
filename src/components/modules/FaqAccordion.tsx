'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span>Q. {item.question}</span>
            <svg
              className={`w-6 h-6 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="pb-4 px-4 text-gray-700 bg-gray-50 rounded-b-lg">
              <p className="pt-4" style={{ whiteSpace: 'pre-line' }}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
