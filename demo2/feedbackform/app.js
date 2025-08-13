const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('form'));

app.post('/submit', upload.none(), (req, res) => {
  const { name, email, issue } = req.body;
  res.render('result', { name, email, issue });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
