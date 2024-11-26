import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload); // Adaugă contactul în lista de contacte
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

