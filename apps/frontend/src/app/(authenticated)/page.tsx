"use client";

import { useAppDispatch, useAppSelector } from "@frontend/hooks/redux";
import {
  selectUsers,
  selectUsersLoading,
} from "@frontend/store/users/selectors";
import { getUsers } from "@frontend/store/users/slice";
import { useEffect } from "react";

export default function UsersPage() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const isLoadingUsers = useAppSelector(selectUsersLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
}
