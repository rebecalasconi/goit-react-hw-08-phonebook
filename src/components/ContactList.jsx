import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  if (!contacts.length) return <p>No contacts available</p>;

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
