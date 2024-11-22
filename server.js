const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Permite cereri din alte surse
app.use(cors()); 
// Permite parsing-ul datelor JSON
app.use(express.json());  

// Ruta pentru înregistrare utilizator
app.post('/users/signup', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: "Email și parola sunt necesare" });
  }

  // Aici adăugăm logica pentru salvarea utilizatorului (poți salva în fișier, DB local, etc.)
  res.status(201).json({ message: "User registered successfully", user: { email } });
});

// Ruta pentru login utilizator
app.post('/users/login', (req, res) => {
    const { email, password } = req.body;
  
    // Simulăm o verificare a datelor
    const validUser = { email: "test@example.com", password: "password" }; // Exemplu de utilizator valid
  
    // Verifică dacă datele trimise se potrivesc
    if (email === validUser.email && password === validUser.password) {
      return res.status(200).json({ message: "Login successful", token: "fake-jwt-token", user: { email } });
    }
  
    // În caz contrar, trimite un mesaj de eroare
    res.status(401).json({ message: "Invalid credentials" });
  });