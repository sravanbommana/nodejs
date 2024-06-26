const fs = require('fs');
const dir = "dir.txt";
const str = "This data is added through string";
const buffer = "This data is added through buffer";

// in this way we can write data as string as well as buffer

//Synchronous way
fs.writeFileSync(dir, str, {flag:'a'});
fs.writeFileSync(dir, buffer, {flag:'a'});

//Asynchronous way
fs.writeFile(dir, str, {flag:'a'}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("data written successfully")
  }
});

fs.writeFile(dir, buffer, {flag:'a'}, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("data written successfully")
  }
});