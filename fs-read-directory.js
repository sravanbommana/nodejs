const fs = require('node:fs');

const dirPath = "textfiles";
const dirPathBuff = Buffer.from(dirPath);

//Synchronous way
const files1 = fs.readdirSync(dirPath);
console.log(files1);

//Asynchronous way
fs.readdir(dirPathBuff, (err, files) => {
  if(err) {
    console.log(err);
  } else {
    console.log(files);
  }
})
