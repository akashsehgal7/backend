const fs = require('fs')
fs.readFile("hey.txt",function(err,data){
    if(err){
         console.error(err)
         return;
    }
        console.log("done");
        
})