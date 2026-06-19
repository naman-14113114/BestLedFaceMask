"use client";

const STAR_POINTS =
  "12 1.6 15.15 8.25 22.35 8.95 17.02 13.72 18.62 20.84 12 17.16 5.38 20.84 6.98 13.72 1.65 8.95 8.85 8.25";

export function parseRating(rating: number | string) {
  if (typeof rating === "number") return Math.max(0, Math.min(5, rating));
  const parsed = Number.parseFloat(rating);
  return Number.isFinite(parsed) ? Math.max(0, Math.min(5, parsed)) : 0;
}

export function GreenStarIcon({
  size = 20,
  fill = 1,
  className = "",
}: {
  size?: number;
  fill?: number;
  className?: string;
}) {
  const percentage = Math.max(0, Math.min(1, fill)) * 100;

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="absolute inset-0 text-[#d7e5df]"
      >
        <polygon points={STAR_POINTS} fill="currentColor" />
      </svg>
      <span
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${percentage}%` }}
      >
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="max-w-none text-[#00b67a]"
        >
          <polygon points={STAR_POINTS} fill="currentColor" />
        </svg>
      </span>
    </span>
  );
}

export function GreenStarRating({
  rating,
  forceFull = false,
  size = 20,
  gap = 4,
  className = "",
}: {
  rating: number | string;
  forceFull?: boolean;
  size?: number;
  gap?: number;
  className?: string;
}) {
  const numericRating = parseRating(rating);
  const visualRating = forceFull ? 5 : numericRating;
  const accessibleLabel = forceFull
    ? `5 displayed stars; overall rating ${numericRating.toFixed(1)} out of 5`
    : `${numericRating.toFixed(1)} out of 5 stars`;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ gap }}
      role="img"
      aria-label={accessibleLabel}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <GreenStarIcon
          key={index}
          size={size}
          fill={visualRating - index}
        />
      ))}
    </div>
  );
}
