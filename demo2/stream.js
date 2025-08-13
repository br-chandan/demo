const fs = require('fs');

const stream = fs.createReadStream('data.txt', { encoding: 'utf8' });

stream.on('data', chunk => {
  console.log('Chunk:', chunk);
});

stream.on('end', () => {
  console.log('Finished reading.');
});
