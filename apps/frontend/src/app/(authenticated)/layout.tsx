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
            py: 3,
            px: 4,
          }}
        >
          {children}
        </Box>
      </StoreProvider>
    </AuthGuard>
  );
}
