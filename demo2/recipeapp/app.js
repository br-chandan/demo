const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/assets', express.static('assets'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('recipe', {
    name: 'Pasta',
    ingredients: ['Pasta', 'Tomatoes', 'Peppers', 'Olive Oil'],
    steps: ['Boil pasta', 'Sauté veggies', 'Mix together', 'Serve hot']
  });
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));
