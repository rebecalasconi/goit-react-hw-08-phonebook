import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import contactsReducer from '../redux/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});