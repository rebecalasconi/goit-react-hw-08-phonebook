import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;