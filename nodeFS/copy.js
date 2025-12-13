const fs = require('fs');
fs.copyFile("hello.txt","./Copy/copy.txt",function(err){
    if(err) console.error(err)
        console.log("done");
        
})