var fs = require('fs');

file = fs.readFileSync(process.argv[2]);

buffed = file.toString();

count = buffed.split('\n').length;

console.log(count - 1);