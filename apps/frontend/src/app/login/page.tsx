"use client";

import { LoginCard } from "@frontend/components/login-card";
import { useAppSelector } from "@frontend/hooks/redux";
import { selectIsLoggedIn } from "@frontend/store/auth/selectors";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginCard />
    </Box>
  );
}
