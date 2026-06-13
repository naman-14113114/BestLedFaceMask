'use client';

import NextLink from "next/link";
import { useParams as useNextParams, usePathname, useRouter } from "next/navigation";
import { useEffect, type ComponentProps, type ReactNode } from "react";

type LegacyLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to: string;
  children?: ReactNode;
};

export function Link({ to, children, ...props }: LegacyLinkProps) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}

export function Outlet() {
  return null;
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string>>() {
  return useNextParams() as T;
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname };
}

export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) {
      router.replace(to);
      return;
    }
    router.push(to);
  }, [replace, router, to]);

  return null;
}
