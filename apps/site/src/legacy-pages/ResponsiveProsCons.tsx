import React from 'react';
import { CheckCircle2, XCircle, Check } from 'lucide-react';

export function summarizeMobilePoint(text: string) {
  const parts = text.split(':');
  if (parts.length > 1) {
    return parts[0];
  }
  return text;
}

export function ResponsiveProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <>
      {/* Mobile Layout (Hidden on Desktop) - Only shows shortened bullets */}
      <div className="md:hidden grid grid-cols-1 gap-4 mb-8">
        <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
          <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2 text-lg">
            <CheckCircle2 size={20} className="text-emerald-500" /> Pros
          </h4>
          <ul className="space-y-3">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base font-medium text-slate-800">
                <Check size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                <span>{summarizeMobilePoint(pro)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50/50 rounded-2xl p-5 border border-red-100">
          <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-lg">
            <XCircle size={20} className="text-red-500" /> Cons
          </h4>
          <ul className="space-y-3">
            {cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base font-medium text-slate-800">
                <XCircle size={18} className="mt-0.5 shrink-0 text-red-500" />
                <span>{summarizeMobilePoint(con)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Layout (Hidden on Mobile) - Full text */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
          <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2 text-lg">
            <CheckCircle2 className="text-emerald-500" /> Pros
          </h4>
          <ul className="space-y-4">
            {pros.map((pro, idx) => {
              const [bold, ...rest] = pro.split(':');
              return (
                <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                  <Check size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">{bold}:</strong>{rest.length > 0 ? ':' + rest.join(':') : ''}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
          <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
            <XCircle className="text-red-500" /> Cons
          </h4>
          <ul className="space-y-4">
            {cons.map((con, idx) => {
              const [bold, ...rest] = con.split(':');
              return (
                <li key={idx} className="text-base text-slate-700 flex items-start gap-3">
                  <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">{bold}:</strong>{rest.length > 0 ? ':' + rest.join(':') : ''}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
