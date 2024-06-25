const fs = require("node:fs");
const dir = "dir.txt";
const size = fs.statSync(dir).size;
const buff = new Buffer.alloc(size);

fs.open(dir, "r+", (err, fd) => {
  if(err) {
    console.log(err)
  } 
  else {
    //same can be acheived synchronoulsy like below line
   // const bytes = fs.readSync(fd,buff,0,size,0);
    fs.read(fd,buff,0,size,0,(err, bytes) => {
      if(err) {
        console.log(err);
      } else {
        console.log(bytes);
        console.log("Content:: ", buff.toString());
      }
    });
  }
})