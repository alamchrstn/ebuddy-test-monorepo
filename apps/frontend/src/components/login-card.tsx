"use client";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormTextField from "./form-text-field";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import { getAuth } from "@frontend/utils/auth";

export function LoginCard() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const auth = getAuth();

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }

    setIsLoading(false);
  };
  return (
    <Paper
      elevation={3}
      sx={{
        paddingY: 3,
        paddingX: 4,
      }}
    >
      <Typography component="h1" variant="h4" sx={{ marginBottom: 2 }}>
        Sign in to view our users
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        <FormTextField
          label="Email"
          id="email"
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          fullWidth
          required
        />
        <FormTextField
          label="Password"
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoComplete="current-password"
          required
          fullWidth
        />

        {error && (
          <Typography variant="body2" sx={{ color: "error.main" }}>
            {error}
          </Typography>
        )}

        <Button type="submit" fullWidth variant="contained" loading={isLoading}>
          Sign in
        </Button>
      </Box>
    </Paper>
  );
}
