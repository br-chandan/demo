const fs = require('fs');

// Write to the file
fs.writeFile('welcome.txt', 'Welcome to Node.js', (err) => {
  if (err) return console.error(err);

  // Read the file
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log(data);
  });
});
