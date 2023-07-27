import UserService from "../../services/UserService/UserService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const backendURL = "http://localhost:7000/";
//initial state
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  refreshToken: null,
  error: null,
  success: false, // for monitoring the registration process.
};

// async action with asyncthunk
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, mobilenumber, email, password }, { rejectWithValue }) => {
    console.log(username, mobilenumber, email, password);
    try {
      const { data } = await UserService(
        username,
        mobilenumber,
        email,
        password
      );
      console.log(data);
      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "login",
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:7000//api/v1/user/login`,
        { firstName, email, password },
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logout user
  },
  extraReducers: (builder) => {
    // register users
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true; // registration successful
      state.userToken = action.payload.token;
      // state.refreshToken = payload.refreshtoken
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true; // registration successful
      state.userToken = action.payload.token;
      // state.refreshToken = payload.refreshtoken
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
