const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

let students = [];

app.post('/register', (req, res) => {
  const { rollNo, name, password } = req.body;
  students.push({ rollNo, name, password });
  res.send('Registered');
});

app.post('/login', (req, res) => {
  const { rollNo, password } = req.body;
  const student = students.find(s => s.rollNo === rollNo && s.password === password);
  if (!student) return res.status(401).send('Invalid credentials');

  req.session.student = student;
  res.cookie('studentPortalAccess', rollNo, { maxAge: 1 * 30 * 1000 });
  res.send(`Welcome ${student.name}`);
});

app.get('/result', (req, res) => {
  const s = req.session.student;
  if (!s) return res.send('Access denied: Please login to view results.');
  res.send(`Hi ${s.name}, your results are available!`);
});

app.get('/logout', (req, res) => {
  res.clearCookie('studentPortalAccess');
  req.session.destroy(() => res.send('Logged out'));
});

app.listen(3000, () => console.log('http://localhost:3000'));
