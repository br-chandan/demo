const buf = Buffer.from('Node.js');
console.log(buf.toString('hex'));  

buf[0] = 'Z'.charCodeAt(0);        
console.log(buf.toString());       
