import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ContactsPage from '../../pages/ContactsPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import { useSelector } from 'react-redux';
//import PrivateRoute from '../../utils/PrivateRoute'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.token);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;