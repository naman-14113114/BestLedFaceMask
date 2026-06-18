'use client';
import { Outlet, Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0 flex flex-col">
      <header className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
            Best LED <span className="text-emerald-600">Face Mask</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-semibold text-slate-600">
            <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        {children ?? <Outlet />}
      </main>
      
      <footer className="bg-white border-t border-slate-200 mt-20 py-12 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p className="font-bold text-lg mb-2 text-slate-800">Best LED Face Mask</p>
          <p className="mb-6">© 2026 Best LED Face Mask. All rights reserved.</p>
          <div className="flex justify-center flex-wrap gap-4 text-xs tracking-wide uppercase font-semibold text-slate-500 mb-6">
            <Link to="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
            <Link to="/disclosure" className="hover:text-emerald-600 transition-colors">Affiliate Disclosure</Link>
            <Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</Link>
          </div>
          <div className="max-w-3xl mx-auto bg-amber-50 p-8 rounded-2xl border-2 border-amber-200 text-sm leading-relaxed text-slate-700 mb-6 text-left shadow-sm">
            <p className="font-bold mb-3 uppercase text-xs tracking-widest text-amber-700">Important Disclosure</p>
            <p className="mb-4"><strong>AFFILIATE DISCLOSURE:</strong> This website contains product reviews and recommendations. We may receive compensation for clicks on or purchase of products featured on this site. <strong>Best LED Face Mask</strong> is a participant in affiliate marketing programs, and we may get paid a commission on editorially chosen products purchased through our links. This comes at no additional cost to you.</p>
            <p className="mb-4"><strong>INDIVIDUAL RESULTS:</strong> Results portrayed in our articles and user stories are illustrative and may not be the results that you achieve. Individual experiences can vary significantly from person to person.</p>
            <p><strong>DISCLAIMER:</strong> The content on this website is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified professional regarding any health concerns.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
