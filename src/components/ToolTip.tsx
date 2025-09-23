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
    <>
      <span
        className="relative inline-block underline decoration-dotted hover:decoration-solid cursor-pointer"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
      </span>

      {isOpen && (
        <>
          <span
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <span
            className="fixed z-50 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-w-md block"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed block">
              {content}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              ×
            </button>
          </span>
        </>
      )}
    </>
  );
}