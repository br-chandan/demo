const fs = require('fs');

const stream = fs.createReadStream('data.txt', { encoding: 'utf8' });

stream.on('data', username => {
  console.log('Username:', username);
});

stream.on('end', () => {
  console.log('Finished reading.');
});
