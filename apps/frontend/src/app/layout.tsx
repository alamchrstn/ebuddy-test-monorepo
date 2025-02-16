import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { FirebaseInit } from "@frontend/components/firebase-init";
import { firebaseConfig } from "@frontend/lib/firebase/config";
import ThemeProvider from "@frontend/providers/theme-provider";
import StoreProvider from "@frontend/providers/store-provider";
import { AuthProvider } from "@frontend/providers/auth-provider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Ebuddy Users",
  description: "Simple app for getting the users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <FirebaseInit config={firebaseConfig}>
              <StoreProvider>
                <AuthProvider>{children}</AuthProvider>
              </StoreProvider>
            </FirebaseInit>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
