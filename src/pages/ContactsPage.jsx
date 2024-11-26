import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();

  

  return (
    <div>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
