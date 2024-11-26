import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import ContactsPage from '../../pages/ContactsPage';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <ContactsPage />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;
