'use client';

import { ChevronDown } from 'lucide-react';

export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-teal-700 transition-colors cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 animate-in fade-in duration-150">
          {answer}
        </div>
      )}
    </div>
  );
}
