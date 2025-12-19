const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
app.get('/',(req, res)=> {
//    bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("pololooo", salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log(hash);
        
//     });
// });

res.send("welcome");
bcrypt.compare("pololooo", "$2b$10$3mwFKjP7Ha6B1oKRVpQpf.MlrClCcpMZCFtzVOqH94tOlvICKhX8e", function(err, result) {
    // result == true
    console.log(result);
    
});
    
})

app.listen(3000);