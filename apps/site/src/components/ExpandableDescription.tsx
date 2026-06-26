"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function ExpandableDescription({
  description,
}: {
  description: string[];
  isWinner?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="prose prose-slate prose-lg max-w-none mb-8">
      <div
        className={`md:block relative overflow-hidden transition-all duration-700 ease-in-out ${
          expanded ? "max-h-[2000px]" : "max-h-32 md:max-h-none"
        }`}
      >
        {description.map((p, idx) => (
          <p
            key={idx}
            className="text-slate-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
        {!expanded && (
          <div className="md:hidden absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="md:hidden w-full py-2 mt-2 flex items-center justify-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors bg-emerald-50/50 rounded-lg border border-emerald-100"
      >
        {expanded ? "Read Less" : "Read More"}
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
