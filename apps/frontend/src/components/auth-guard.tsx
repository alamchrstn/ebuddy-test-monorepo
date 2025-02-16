"use client";

import { useAppSelector } from "@frontend/hooks/redux";
import { selectIsLoggedIn } from "@frontend/store/auth/selectors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function AuthGuard({ children }: React.PropsWithChildren) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="body1" textAlign="center">
          Unauthorized
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
}
