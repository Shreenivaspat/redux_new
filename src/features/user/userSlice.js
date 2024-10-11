import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../../api/userApi";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
    editUser: null,
  },
  reducers: {
    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedData };
      }
      state.editUser = null;
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== userIdToDelete);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setEditUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
