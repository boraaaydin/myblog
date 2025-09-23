"use client";

import { ReactNode, useState } from "react";
import { getTooltipContent } from "@/lib/tooltip-content";

interface ToolTipProps {
  keyName: string;
  children: ReactNode;
}

export default function ToolTip({ keyName, children }: ToolTipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const content = getTooltipContent(keyName);

  if (!content) {
    return <span>{children}</span>;
  }

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="underline decoration-dotted hover:decoration-solid cursor-pointer"
      >
        {children}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 mt-2 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-w-md w-max">
            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {content}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </>
      )}
    </span>
  );
}