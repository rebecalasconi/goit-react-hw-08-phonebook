import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsSlice';
import { Box, Typography, CircularProgress, List, ListItem, ListItemText, TextField, Button } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contacts
      </Typography>

      {isLoading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      <List>
        {items.map(contact => (
          <ListItem key={contact.id} sx={{ borderBottom: '1px solid #ccc' }}>
            <ListItemText primary={contact.name} secondary={contact.number} />
          </ListItem>
        ))}
      </List>

      <Box component="form" sx={{ mt: 2 }}>
        <TextField label="Name" fullWidth sx={{ mb: 2 }} />
        <TextField label="Number" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="primary" fullWidth>
          Add Contact
        </Button>
      </Box>
    </Box>
  );
};

export default ContactsPage;