"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { useAppDispatch } from "@frontend/hooks/redux";
import { getUsers } from "@frontend/store/users/slice";

export default function MainAppBar() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleRefresh = () => {
    dispatch(getUsers());
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AppBar color="primary" position="fixed" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Our users
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton aria-label="refresh" onClick={handleRefresh}>
            <RefreshIcon />
          </IconButton>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
