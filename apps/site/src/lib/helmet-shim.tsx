'use client';

import type { ReactNode } from "react";

export function Helmet({ children }: { children?: ReactNode }) {
  void children;
  return null;
}

export function HelmetProvider({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
