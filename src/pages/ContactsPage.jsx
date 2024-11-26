import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contacts/contactsSlice';
import ContactForm from '../components/ContactForm';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const navigate = useNavigate(); // folosim useNavigate din React Router v6 pentru navigare

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    if (filter) {
      setFilteredContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setFilteredContacts(contacts);
    }
  }, [contacts, filter]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleDelete = (id) => {
    console.log('Deleting contact with id:', id);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // îndepărtăm tokenul
    navigate('/login'); // navigăm către pagina de login
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter contacts"
      />
      <ContactForm />
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;

