//fs.write(fd, string[,position[, encoding]], callback)
//fs.write(fd, string[, position[, encoding]])

const fs = require('fs');
const text = "This is the string i want to write\n";
const filename = "dir.txt";

//In this example we are using string to write
fs.open(filename, "a", (err, fd) => {
  if(err) {
    console.log(err);
  } else {
    //synchronous way    
    fs.write(fd, text, (err, bytes) => {
      if(err) {
        console.log(err);
      } else {
        console.log("Written", bytes, "to file");
      }
    })
  }
})


