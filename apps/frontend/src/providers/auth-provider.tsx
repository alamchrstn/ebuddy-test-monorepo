"use client";

import { useAuth } from "@frontend/hooks/auth";
import { useAppSelector } from "@frontend/hooks/redux";
import { selectIsInitialized } from "@frontend/store/auth/selectors";

export function AuthProvider({ children }: React.PropsWithChildren) {
  useAuth();

  const isInitialized = useAppSelector(selectIsInitialized);

  if (!isInitialized) {
    // TODO: Add loading state
    return null;
  }

  return <>{children}</>;
}
