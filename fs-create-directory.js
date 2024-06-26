//fs.mkdir(path[, mode], callback)
//fs.mkdirSync(path[, mode])

const fs = require('fs');
const str = "QWERT ASDF ASFF"
const dirNames = {
  sync:"createdDir",
  async: "asyncCreatedDir"
}
//Synchronous way
fs.mkdirSync(dirNames.sync, 0o777);
fs.writeFileSync(`${dirNames.sync}/file1.js`, "GSDA")
//Asynchronous way
fs.mkdir(dirNames.async, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Created successfully")
  }
});
