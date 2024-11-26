const express = require('express');
const cors = require('cors');
const fs = require('fs');  // Pentru a lucra cu fișiere
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Calea către fișierul în care salvăm utilizatorii
const usersFilePath = './users.json';

// Funcție pentru a citi utilizatorii din fișier
const getUsersFromFile = () => {
  if (!fs.existsSync(usersFilePath)) {
    return [];  // Dacă fișierul nu există, întoarcem un array gol
  }
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

// Funcție pentru a salva utilizatorii în fișier
const saveUsersToFile = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Ruta pentru înregistrare utilizator
app.post('/users/signup', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email și parola sunt necesare" });
  }

  const users = getUsersFromFile();
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "Acest email este deja utilizat" });
  }

  // Adăugăm utilizatorul nou
  users.push({ email, password });
  saveUsersToFile(users);  // Salvăm utilizatorii în fișier

  res.status(201).json({ message: "User registered successfully", user: { email } });
});

// Ruta pentru login utilizator
app.post('/users/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email și parola sunt necesare" });
  }

  const users = getUsersFromFile();
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Dacă utilizatorul există și parola este corectă
    return res.status(200).json({ message: "Login successful", token: "fake-jwt-token", user: { email } });
  } else {
    // Dacă nu găsim utilizatorul sau parola este greșită
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});