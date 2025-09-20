"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function Accordion({ title, content, defaultOpen = false, className = "" }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-neutral-200 rounded-lg ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200 rounded-t-lg flex items-center justify-between"
      >
        <span className="font-medium text-neutral-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-neutral-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 py-3 border-t border-neutral-200">
          {content}
        </div>
      )}
    </div>
  );
}