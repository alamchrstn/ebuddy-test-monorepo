"use client";

import UserCard from "@frontend/components/user-card";
import UserCardSkeleton from "@frontend/components/user-card-skeleton";
import { useAppDispatch, useAppSelector } from "@frontend/hooks/redux";
import {
  selectUsers,
  selectUsersLoading,
} from "@frontend/store/users/selectors";
import { getUsers } from "@frontend/store/users/slice";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import UsersErrorSnackbar from "@frontend/components/users-error-snackbar";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const isLoadingUsers = useAppSelector(selectUsersLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {isLoadingUsers &&
          Array.from({ length: 6 }).map((_, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <UserCardSkeleton />
            </Grid>
          ))}
        {users.map((user) => (
          <Grid size={{ xs: 12, sm: 6 }} key={user.username}>
            <UserCard key={user.username} user={user} />
          </Grid>
        ))}
      </Grid>
      <UsersErrorSnackbar />
    </Container>
  );
}
