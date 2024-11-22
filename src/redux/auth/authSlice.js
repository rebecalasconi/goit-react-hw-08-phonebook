import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Cerere pentru înregistrare utilizator
export const register = createAsyncThunk('auth/register', async (credentials) => {
  const response = await axios.post('http://localhost:3001/users/signup', credentials);
  return response.data;
});

// Cerere pentru login utilizator
export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('/users/login', credentials);
  return response.data; // va include { message, token, user }
});
export const logout = createAsyncThunk('auth/logout', async () => {
  // În funcție de implementarea ta, poți adăuga logica de logout aici
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;