const fs = require("fs");

const dirfile = "dir.txt";
const flagfile = "flag.txt";

//Synchronous way
const details = fs.statSync(dirfile);
//gives all the details of file
//console.log(details);

console.log(details.isDirectory());
console.log(details.isFile());


//Asynchronous way
fs.stat(dirfile, (err, stats) => {
  if(err) {
    console.log("Error");
  } else {
    console.log("stats", stats);
  }
})