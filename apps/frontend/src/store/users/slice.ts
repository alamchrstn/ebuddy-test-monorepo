import { fetchUsers } from "@frontend/api/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@repo/models/user";
import { createAppAsyncThunk } from "../utils";

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const getUsers = createAppAsyncThunk("users/getUsers", async () => {
  const users = await fetchUsers();
  return users;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message ?? "Something went wrong";
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUsers, reset } = usersSlice.actions;

export default usersSlice.reducer;
