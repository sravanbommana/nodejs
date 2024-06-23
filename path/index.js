const path = require("node:path");

//get current file path name and directory name
console.log("current path to the file:", __filename);
console.log("full path to the folder where index.js located:", __filename);

console.log("###############################################################################################")
//get last portion from the path of current file
console.log("last portion of path:    ", path.basename(__filename));
console.log("last portiion of path to the folder where index.js located:    ", path.basename(__dirname));

console.log("###############################################################################################")
//get last portion extension from the path of current file
console.log("extension path:    ", path.extname(__filename));
console.log("extension    ", path.extname(__dirname));


console.log("###############################################################################################");
//get path details in object format
console.log(path.parse(__filename));
// get full path in string
console.log(path.format(path.parse(__filename)));

// check whether it's absolute path
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'))