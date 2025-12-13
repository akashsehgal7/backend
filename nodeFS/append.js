const fs = require('fs')
fs.appendFile("hey.txt","i am good.",function(err){
    if(err) console.error(err)
        console.log("done");
        
})