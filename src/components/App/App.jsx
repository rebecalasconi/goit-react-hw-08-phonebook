import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import ContactsPage from '../../pages/ContactsPage';
import UserMenu from '../Navigation/UserMenu';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Navigation />
      <UserMenu />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Dacă utilizatorul este autentificat, îl redirecționezi către /contacts */}
        <Route path="/contacts" element={token ? <ContactsPage /> : <Navigate to="/login" />} />
        {/* Restul rutelor */}
      </Routes>
    </>
  );
}

export default App;
