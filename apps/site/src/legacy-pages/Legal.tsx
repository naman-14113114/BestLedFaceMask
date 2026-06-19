'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_NAME, SUPPORT_EMAIL } from '@/lib/brand';

export default function Legal() {
  const location = useLocation();
  
  let title = "Privacy Policy";
  let content: React.ReactNode = (
    <>
      <p className="mb-4">We are committed to protecting your personal information and your right to privacy. When you visit our website bestledfacemask.org, we appreciate that you are trusting us with your personal information.</p>
      <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or otherwise when you contact us.</p>
      <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">How We Use Your Information</h2>
      <p className="mb-4">We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
    </>
  );
  
  if (location.pathname.includes("terms")) {
    title = "Terms of Service";
    content = (
      <>
        <p className="mb-4">These terms and conditions outline the rules and regulations for the use of {SITE_NAME}&apos;s website. By accessing this website we assume you accept these terms and conditions.</p>
        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">License</h2>
        <p className="mb-4">Unless otherwise stated, {SITE_NAME} and/or its licensors own the intellectual property rights for all material on {SITE_NAME}. All intellectual property rights are reserved.</p>
        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Hyperlinking to our Content</h2>
        <p className="mb-4">The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations.</p>
      </>
    );
  } else if (location.pathname.includes("disclosure")) {
    title = "Affiliate Disclosure";
    content = (
      <>
        <p className="mb-4"><strong>Transparency is our priority.</strong> This Affiliate Disclosure is provided to fully disclose any relationship between this site's product reviews and recommendations and the owners of those products.</p>
        <p className="mb-4">{SITE_NAME} is a participant in various affiliate marketing programs, which means we may get paid a commission on editorially chosen products purchased through our links to retailer sites.</p>
        <p className="mb-4">When you click on a link to a product on this website and subsequently make a purchase, we may receive a small percentage of the sale price as a commission. This comes at no additional cost to you.</p>
        <p className="mb-4">Our reviews and recommendations are based on our own research and analysis. We strive to provide honest and unbiased information to help you make informed purchasing decisions. However, the potential for commission may influence the products we choose to feature.</p>
      </>
    );
  } else if (location.pathname.includes("contact")) {
    title = "Contact Us";
    content = (
      <>
        <p className="mb-4">If you have any questions about our editorial policies, advertorial disclosures, or product reviews, please contact us at: <strong>{SUPPORT_EMAIL}</strong>.</p>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
           <h3 className="font-bold text-slate-800 mb-2">Our Response Time</h3>
           <p className="text-slate-600 text-sm">Our team aims to respond to all inquiries within 48 business hours. Please include your name and the topic of your inquiry in the subject line.</p>
        </div>
      </>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-[60vh] py-16 px-4">
      <Helmet>
        <title>{title} | {SITE_NAME}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 font-sans">{title}</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          {content}
          
          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">1. Information and Transparency</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            This website operates as an advertorial platform. We evaluate and recommend products based on market research and affiliate partnerships. We strongly believe in transparency and want our users to understand our operational model.
          </p>
          
          <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">2. Medical Disclaimer</h2>
          <p className="text-slate-600 leading-relaxed">
            The content on our website is provided for general information purposes only and is not intended as, nor should it be considered a substitute for, professional medical advice. Do not use the information on this website for diagnosing or treating any medical or health condition.
          </p>
        </div>
      </div>
    </div>
  );
}
