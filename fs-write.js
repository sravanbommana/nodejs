const fs = require('fs');
const text = "This is new text";
const dir = 'dir.txt';
fs.writeFileSync(dir, text);

