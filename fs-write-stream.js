const fs = require('fs');

const writeStream = fs.createWriteStream("./textfiles/file2.txt");
const data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

writeStream.write(data, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Data written successfully");
  }
})