import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number) {
      setError('Both name and number are required.');
      return;
    }

    const contactData = { name, number };

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not authenticated.');
      return;
    }

    try {
      const response = await fetch('https://connections-api.goit.global/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to add contact');
      }

      const newContact = await response.json();
      console.log('API response:', newContact); // Verificăm răspunsul API-ului
      dispatch(addContact(newContact)); // Actualizăm contactele în Redux

      // Resetăm formularul
      setName('');
      setNumber('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Contact</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
