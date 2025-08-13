const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); /


let users = [];
let nextId = 1;


app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }
  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found." });
  }
  const deletedUser = users.splice(index, 1);
  res.json({ message: "User deleted.", user: deletedUser[0] });
});


app.listen(port, () => {
  console.log(`User Management App running at http://localhost:${port}`);
});
