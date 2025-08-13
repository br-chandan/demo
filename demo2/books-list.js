const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien' }
];
let nextId = 3;

app.get('/books', (req, res) => res.send(JSON.stringify(books)));

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).send('Title and author are required.');
  books.push({ id: nextId++, title, author });
  res.send(`Book added: ${title} by ${author}`);
});

app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send('Book not found.');
  Object.assign(book, req.body);
  res.send(`Book updated: ${book.title} by ${book.author}`);
});

app.delete('/books/:id', (req, res) => {
  const i = books.findIndex(b => b.id == req.params.id);
  if (i === -1) return res.status(404).send('Book not found.');
  const b = books.splice(i, 1)[0];
  res.send(`Deleted book: ${b.title} by ${b.author}`);
});

app.listen(3000, () => console.log('Book app running at http://localhost:3000'));
