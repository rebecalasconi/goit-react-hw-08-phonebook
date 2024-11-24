import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <UserMenu />
    </nav>
  );
};

export default Navigation;