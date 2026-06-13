'use client';

import type { ReactNode } from "react";

export function Helmet(_props: { children?: ReactNode }) {
  return null;
}

export function HelmetProvider({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
