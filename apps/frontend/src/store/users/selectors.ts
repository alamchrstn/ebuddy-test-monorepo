import type { RootState } from "@frontend/store/store";

export function selectUsers(state: RootState) {
  return state.users.users;
}

export function selectUsersLoading(state: RootState) {
  return state.users.loading;
}

export function selectUsersError(state: RootState) {
  return state.users.error;
}
