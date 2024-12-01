import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logIn } from "../services/api";

// Thunk for login API call
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await logIn(credentials);
      return response; // Return user data on success
    } catch (error) {
      return rejectWithValue(error.message || "Login failed.");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Logout action to clear user state
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login pending
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle login success
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.user.token;
      })
      // Handle login failure
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Exporting logout action for use
export const { logout } = userSlice.actions;

export default userSlice.reducer;
