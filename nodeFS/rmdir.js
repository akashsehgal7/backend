const fs = require('fs')
fs.rm("./Copy",{recursive: true},function(err){
    if(err) console.error(err)
        console.log("removed");
        
})