const dirfile = "dir.txt";
const flagfile = "flag.txt";

const fs = require('fs');

fs.open(dirfile, "r+", (err, fd) => {
  if(err) {
    console.log("code", err.code);
    console.log("message", err.message);

  } else {
    //U can read and write here
    console.log("Succesfully opened file");
    fs.close(fd, (err) => {
      console.log("file closed");
    });
  }
});