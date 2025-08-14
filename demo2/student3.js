const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: 's', resave: false, saveUninitialized: true }));

let students = [], courses = ['Math', 'Science', 'History'];

app.post('/register', (req, res) => {
  const { rollNo, name, password } = req.body;
  students.push({ rollNo, name, password });
  res.send('Registered');
});

app.post('/login', (req, res) => {
  const s = students.find(x => x.rollNo === req.body.rollNo && x.password === req.body.password);
  if (!s) return res.status(401).send('Invalid');
  req.session.student = s;
  res.send('Logged in');
});

app.get('/courses', (req, res) => {
  if (!req.session.student) return res.status(401).send('Login first');
  res.send('Courses: ' + courses.join(', '));
});

app.post('/courses', (req, res) => {
  if (!req.session.student) return res.status(401).send('Login first');
  const course = req.body.course;
  if (!courses.includes(course)) return res.status(400).send('Invalid course');
  res.cookie('lastEnrolledCourse', course, { maxAge: 2 * 60 * 1000 });
  res.send(`Enrolled in ${course}`);
});

app.listen(3000, () => console.log('http://localhost:3000'));
