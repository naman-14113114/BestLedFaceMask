import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f4e6"
};

const microsoftConsentDefault = `
    (function () {
      var stored = null;
      try {
        stored = window.localStorage.getItem("tpr_microsoft_ads_consent");
      } catch (error) {}

      var state = "granted";
      window.__tprMicrosoftAdsConsent = state;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "microsoft_ads_consent_default",
        ad_storage: state
      });

      window.dataLayer.push({ event: "microsoft_ads_consent_update", ad_storage: "granted" });
    })();
`;

const googleTagManager = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TQ3HRZMJ');`;

const outboundConversionConfig = `
    window.__tprBuudyOutboundConversion = {
      value: 330,
      currency: 'INR',
      events: ['buudy_outbound_click', 'affiliate_click']
    };
`;

const tawkToScript = `
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    (function () {
      var api = window.Tawk_API;

      function isTawkFrame(frame) {
        if (!frame || frame.tagName !== "IFRAME") return false;

        var source = frame.getAttribute("src");
        var zIndex = Number.parseInt(frame.style.zIndex || "0", 10);
        return (
          frame.style.position === "fixed" &&
          zIndex >= 1000000 &&
          (!source || source === "about:blank")
        );
      }

      function hideTawkFrames() {
        document.querySelectorAll("body > iframe").forEach(function (frame) {
          if (!isTawkFrame(frame)) return;
          if (
            frame.style.getPropertyValue("display") !== "none" ||
            frame.style.getPropertyPriority("display") !== "important"
          ) {
            frame.style.setProperty("display", "none", "important");
            frame.style.setProperty("visibility", "hidden", "important");
            frame.style.setProperty("pointer-events", "none", "important");
          }
        });
      }

      function hideTawkWidget() {
        try {
          if (typeof api.hideWidget === "function") {
            api.hideWidget();
          }
        } catch (error) {}
        hideTawkFrames();
      }

      api.autoStart = true;
      api.onBeforeLoad = hideTawkWidget;
      api.onLoad = function () {
        hideTawkWidget();
        window.setTimeout(hideTawkWidget, 250);
        window.setTimeout(hideTawkWidget, 1000);
      };
      api.onStatusChange = hideTawkWidget;
      api.onChatMinimized = hideTawkWidget;
      api.onChatEnded = hideTawkWidget;

      function observeTawkFrames() {
        if (!document.body) return;
        hideTawkFrames();
        new MutationObserver(hideTawkFrames).observe(document.body, {
          childList: true,
          attributes: true,
          attributeFilter: ["style"]
        });
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", observeTawkFrames, { once: true });
      } else {
        observeTawkFrames();
      }

      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/699e744b8a14f51c38e4fa86/1ji9fci26';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://img.thesitebase.net" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
      </head>
      <body>
        <Script
          id="microsoft-ads-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: microsoftConsentDefault }}
        />
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: googleTagManager }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ3HRZMJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script src="/assets/microsoft-consent-mode.js" strategy="afterInteractive" />
        <Script src="/assets/outbound-interactions-v2.js" strategy="afterInteractive" />
        <Script
          id="tpr-buudy-outbound-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: outboundConversionConfig }}
        />
        <Script src="/assets/buudy-exit-popup.js" strategy="afterInteractive" />
        <Script
          id="tawk-to-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: tawkToScript }}
        />
      </body>
    </html>
  );
}
