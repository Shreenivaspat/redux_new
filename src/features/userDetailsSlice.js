import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

// export const { increment, decrement, addData, showData } = userDetails.actions;

export default userDetails.reducers;
