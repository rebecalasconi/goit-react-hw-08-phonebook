import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContacts(state, action) {
      return action.payload;
    },
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setContacts, addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
