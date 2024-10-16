import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";
import { ENDPOINTS } from "../helpers/constant";

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(ENDPOINTS.USER_DETAILS);
      console.log(response.data, "response2123");
      return response.data; // Return the data if the request is successful
    } catch (err) {
      if (!err.response) {
        // Handle the case where there is no response from the server
        return rejectWithValue({
          message: "Network Error: No response received.",
        });
      }
      return rejectWithValue(err.response.data); // Handle API error by rejecting with value
    }
  }
);
