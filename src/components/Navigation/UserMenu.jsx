import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importă hook-ul useNavigate

const UserMenu = () => {
  const navigate = useNavigate(); // Inițializează hook-ul

  const handleLogout = () => {
    // Logica pentru deconectare
    localStorage.removeItem('token'); // Elimină token-ul de autentificare

    // Navighează către pagina de login după deconectare
    navigate('/login'); // Folosește navigate în loc de history.push
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;

