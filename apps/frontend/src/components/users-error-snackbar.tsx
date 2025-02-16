"use client";

import { useAppSelector } from "@frontend/hooks/redux";
import { selectUsersError } from "@frontend/store/users/selectors";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

export default function UsersErrorSnackbar() {
  const usersError = useAppSelector(selectUsersError);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (usersError) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [usersError]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {usersError}
      </Alert>
    </Snackbar>
  );
}
