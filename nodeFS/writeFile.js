// const fs = require('node:fs');
const fs = require('fs');
fs.writeFile("hey.txt","hey hey how are you ?",function(err){
    if(err) console.error(err);
    console.log("done");
})