import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isInitialized: boolean;
  idToken: string | null;
}

const initialState: AuthState = {
  isInitialized: false,
  idToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIdToken: (state, action: PayloadAction<string | null>) => {
      state.isInitialized = true;
      state.idToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIdToken } = authSlice.actions;

export default authSlice.reducer;
