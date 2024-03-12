const fs = require('fs/Promises');

fs.writeFile('./write.txt', "Hello Dreamer");

const x = fs.readFileSync('./write.txt');
console.log(x);

let b = new Buffer.from("ABCD");
let b1 = b.toString();
console.log(b1);