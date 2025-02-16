import { getAuth as baseGetAuth, connectAuthEmulator } from "firebase/auth";

export function getAuth() {
  const auth = baseGetAuth();
  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR &&
    !auth.emulatorConfig // ensure only connected once
  ) {
    connectAuthEmulator(auth, process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR);
  }

  return auth;
}
