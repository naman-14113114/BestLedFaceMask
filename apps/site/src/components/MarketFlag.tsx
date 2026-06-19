import { Globe2 } from "lucide-react";
import type { AdvertorialMarketKey } from "@/lib/advertorialMarkets";

const flagClassName =
  "h-5 w-8 overflow-hidden rounded-[3px] border border-white/40 shadow-sm md:h-6 md:w-9";

export function MarketFlag({ market }: { market: AdvertorialMarketKey }) {
  if (market === "global") {
    return (
      <Globe2
        className="h-6 w-6 shrink-0 md:h-7 md:w-7"
        aria-label="Worldwide"
      />
    );
  }

  if (market === "us") {
    return (
      <svg
        viewBox="0 0 38 24"
        className={flagClassName}
        role="img"
        aria-label="United States flag"
      >
        <rect width="38" height="24" fill="#fff" />
        {[0, 4, 8, 12, 16, 20].map((y) => (
          <rect key={y} y={y} width="38" height="2" fill="#b22234" />
        ))}
        <rect width="16" height="13" fill="#3c3b6e" />
        {[2, 6, 10].flatMap((y) =>
          [2, 6, 10, 14].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r=".65" fill="#fff" />
          )),
        )}
      </svg>
    );
  }

  if (market === "ca") {
    return (
      <svg
        viewBox="0 0 38 24"
        className={flagClassName}
        role="img"
        aria-label="Canada flag"
      >
        <rect width="38" height="24" fill="#fff" />
        <rect width="8" height="24" fill="#d52b1e" />
        <rect x="30" width="8" height="24" fill="#d52b1e" />
        <path
          d="M19 4.5 20.4 8l3-1.1-1.1 3.1 2.7 1.2-3.1 1.7.7 3.1-2.7-.7-.9 4.2-.9-4.2-2.7.7.7-3.1-3.1-1.7 2.7-1.2-1.1-3.1 3 1.1Z"
          fill="#d52b1e"
        />
      </svg>
    );
  }

  if (market === "au") {
    return (
      <svg
        viewBox="0 0 38 24"
        className={flagClassName}
        role="img"
        aria-label="Australia flag"
      >
        <rect width="38" height="24" fill="#012169" />
        <g>
          <rect width="18" height="12" fill="#012169" />
          <path d="M0 0 18 12M18 0 0 12" stroke="#fff" strokeWidth="3" />
          <path d="M0 0 18 12M18 0 0 12" stroke="#c8102e" strokeWidth="1.2" />
          <path d="M9 0v12M0 6h18" stroke="#fff" strokeWidth="4" />
          <path d="M9 0v12M0 6h18" stroke="#c8102e" strokeWidth="2" />
        </g>
        <g fill="#fff">
          <circle cx="27" cy="6" r="1.2" />
          <circle cx="32" cy="11" r="1" />
          <circle cx="27.5" cy="17.5" r="1.1" />
          <circle cx="34" cy="19" r=".9" />
          <circle cx="21" cy="15" r="1.5" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 38 24"
      className={flagClassName}
      role="img"
      aria-label="United Kingdom flag"
    >
      <rect width="38" height="24" fill="#012169" />
      <path d="M0 0 38 24M38 0 0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0 38 24M38 0 0 24" stroke="#c8102e" strokeWidth="2" />
      <path d="M19 0v24M0 12h38" stroke="#fff" strokeWidth="8" />
      <path d="M19 0v24M0 12h38" stroke="#c8102e" strokeWidth="4" />
    </svg>
  );
}
