import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from './apiAxios.js'

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password, _token }, { rejectWithValue }) => {
      try {
        const values = { email, password };
        const { data } = await axios.post(
          `/api/auth/login?token=${_token ? _token : ""}`,
          values
        );
        return data;
      } catch (err) {
        return rejectWithValue(err.response.data.message);
      }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isAuthenticated: false,
        error: null
    },
    reducers: {
        authenticate: (state) => {
            state.isAuthenticated = !state.isAuthenticated
        },
    },
    extraReducers: {
        //login
        [login.pending]: (state, { payload }) => {
            state.loading = true
        },
        [login.fulfilled]: (state, { payload }) => {
            state.isAuthenticated = true;
            state.loading = false;
        },
        [login.rejected]: (state, { payload }) => {
            state.error = payload;
            state.loading = false;
        }
    }
});

// Action creators are generated for each case reducer function

export const { authenticate } = authSlice.actions

export default authSlice.reducer