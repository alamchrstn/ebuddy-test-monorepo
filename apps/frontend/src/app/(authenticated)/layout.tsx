"use client";

import { AuthGuard } from "@frontend/components/auth-guard";
import MainAppBar from "@frontend/components/main-app-bar";
import Box from "@mui/material/Box";
import StoreProvider from "@frontend/providers/store-provider";

export default function AuthenticatedLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <AuthGuard>
      <StoreProvider>
        <MainAppBar />
        <Box
          sx={{
            paddingTop: 10,
            paddingBottom: 3,
          }}
        >
          {children}
        </Box>
      </StoreProvider>
    </AuthGuard>
  );
}
