const fs = require('fs');
const dir = "dir.txt";

//Synchronus way
const data = fs.readFileSync(dir, {encoding:"utf-8"});
console.log("data", data);

//Asynchronus way
const data2 = fs.readFile(dir, (err, data5) => {
  if(err) {
    console.log(err)
  } else {
    console.log("data2", data5.toString())
  }
});