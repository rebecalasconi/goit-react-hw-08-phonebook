import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user && <p>{user.email}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;