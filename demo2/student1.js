const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

let students = [];

// Register student
app.post('/register', (req, res) => {
  const { rollNo, name, password } = req.body;
  students.push({ rollNo, name, password });
  res.send('Registered successfully');
});

// Login student
app.post('/login', (req, res) => {
  const { rollNo, password } = req.body;
  const student = students.find(s => s.rollNo === rollNo && s.password === password);
  if (!student) return res.status(401).send('Invalid credentials');

  req.session.student = student;
  res.cookie('studentPortalAccess', rollNo, { maxAge: 3 * 60 * 1000 }); // 3 mins
  res.send(`Welcome ${student.name}`);
});

// Protected route example
app.get('/dashboard', (req, res) => {
  if (!req.session.student) return res.status(403).send('Login required');
  res.send(`Dashboard: Hello ${req.session.student.name}`);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
