"use client";

import { FirebaseOptions, initializeApp, getApps } from "firebase/app";

export function FirebaseInit({
  config,
  children,
}: React.PropsWithChildren<{ config: FirebaseOptions }>) {
  if (getApps().length === 0) {
    initializeApp(config);
  }

  return <>{children}</>;
}
