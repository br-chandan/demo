const express = require('express');
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 75000, stock: 10 },
  { id: 2, name: 'Smartphone', price: 30000, stock: 25 },
  { id: 3, name: 'Headphones', price: 2000, stock: 50 }
];

app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found.' });

  Object.assign(product, req.body);
  res.json({ message: 'Product updated.', product });
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));
