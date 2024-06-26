const fs = require('node:fs');
const file = 'dir.txt';
const text = "OFFSET@@@@@This is the new test";
const buff = Buffer.from(text, 'utf-8');
const offset = 6;


//In this example we are using buffer to write
fs.open(file, "w", (err, fd) => {
  if(err) {
    console.log(err);
  } else {
    //Synchronus way
    let bytes = fs.writeSync(fd, buff, 0, buff.byteLength, 0);
    console.log(bytes, "bytes written to file");
    //Asynchrous way
    fs.write(fd, buff, 0, buff.byteLength, 0, (err, bytes) => {
      if(err) {
        console.log(errr);
      } else {
        console.log("Written", bytes, "into file second time");
      }
    })
  }
})
