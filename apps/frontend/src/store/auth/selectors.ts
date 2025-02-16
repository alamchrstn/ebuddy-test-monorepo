import type { RootState } from "@frontend/store/store";

export function selectIsLoggedIn(state: RootState) {
  return state.auth.isInitialized && !!state.auth.idToken;
}

export function selectIsInitialized(state: RootState) {
  return state.auth.isInitialized;
}
