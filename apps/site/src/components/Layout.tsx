'use client';

import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SITE_NAME } from '@/lib/brand';

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <header className="border-b border-slate-200 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
            Best LED <span className="text-emerald-600">Face Mask</span>
          </Link>
          <nav className="hidden gap-8 font-semibold text-slate-600 md:flex" aria-label="Primary navigation">
            <Link to="/" className="transition-colors hover:text-emerald-600">Home</Link>
            <Link to="/best-led-face-mask-2026" className="transition-colors hover:text-emerald-600">Rankings</Link>
            <Link to="/editorial-policy" className="transition-colors hover:text-emerald-600">How We Review</Link>
            <Link to="/contact" className="transition-colors hover:text-emerald-600">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children ?? <Outlet />}</main>

      <footer className="mt-20 border-t border-slate-200 bg-white px-4 py-12 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <p className="mb-2 text-lg font-bold text-slate-800">{SITE_NAME}</p>
          <p className="mb-6">© 2026 {SITE_NAME}. All rights reserved.</p>
          <nav className="mb-6 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wide text-slate-500" aria-label="Footer navigation">
            <Link to="/privacy" className="transition-colors hover:text-emerald-600">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-emerald-600">Terms of Service</Link>
            <Link to="/disclosure" className="transition-colors hover:text-emerald-600">Affiliate Disclosure</Link>
            <Link to="/about" className="transition-colors hover:text-emerald-600">About</Link>
            <Link to="/editorial-policy" className="transition-colors hover:text-emerald-600">Editorial Policy</Link>
            <Link to="/contact" className="transition-colors hover:text-emerald-600">Contact Us</Link>
          </nav>
          <div className="mx-auto mb-6 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-7 text-left text-sm leading-relaxed text-slate-700">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">Important disclosure</p>
            <p className="mb-4"><strong>Affiliate disclosure:</strong> We may receive compensation for clicks on or purchases of products featured on this site. This comes at no additional cost to you.</p>
            <p className="mb-4"><strong>Individual results:</strong> Experiences with skincare devices vary. Product information and examples do not guarantee a particular result.</p>
            <p><strong>Medical disclaimer:</strong> This website provides general information and is not a substitute for professional medical advice, diagnosis or treatment.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
