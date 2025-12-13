const fs = require('fs')
fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.error(err)
        console.log("done");
        
})