const fs = require('fs');
const readStream = fs.createReadStream("./textfiles/file1.txt");

//const readStream = fs.createReadStream("./textfiles/file1.txt", {highWaterMark:30, start:90, end:149});
// readStream.on("string", (data) => {
//   //console.log(data.split(" "));
// });
readStream.on("data", (data) => {
  const temp = data.toString();
 console.log(temp);
});