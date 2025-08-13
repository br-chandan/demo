const fs = require('fs');

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(5, 3, (sum) => {
  const multiplied = sum * 10;
  console.log('Result:', multiplied);

  fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) return console.error('File read error:', err);
    console.log('File contents:', data);
  });
});
