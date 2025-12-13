const express = require('express');
const app = express();
app.get("/",function(req,res){
    res.send("Hello world !");
})
app.get("/profile",function(req,res){
    res.send("This is profile page !"); 
})
app.listen(3000);
