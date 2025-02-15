"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export function AuthGuard({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    setUser(auth.currentUser);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  if (!user) {
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
