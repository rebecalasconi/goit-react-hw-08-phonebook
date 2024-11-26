import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifică dacă toate câmpurile sunt completate
    if (!name || !email || !phone) {
      setError('All fields are required.');
      return;
    }
    
    const contactData = { 
      name, 
      email, 
      phone, 
      number: phone  // Adaugă 'number' dacă acesta este necesar
    };
    console.log('Sending contact data:', contactData); // Verifică datele trimise
  
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not authenticated. Please log in!');
      return;
    }
  
    try {
      const response = await fetch('https://connections-api.goit.global/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(contactData),
      });
  
      const data = await response.json();
      console.log('API response:', data);  // Log the full response
  
      if (!response.ok) {
        console.error('API error details:', data); // Detalii eroare
        throw new Error(data.message || 'Failed to add contact');
      }
  
      console.log('Contact added successfully:', data);  // Verifică întregul contact adăugat
  
      dispatch(addContact(data)); // Salvează contactul în Redux
  
      setName('');
      setEmail('');
      setPhone('');
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
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
