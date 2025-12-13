const express = require('express');
const app = express();
app.use(function(req, res,next){
    console.log("middleware chal gaya...");
    next()
})
app.use(function(req, res, next){
    console.log("ye ek hor middleware hai ...");
    next();
    
})
app.get('/',function(req, res){
    res.send("Hello world !");
});
app.get('/profile',function(req, res){
    res.send("This is profile page !");
})
app.get('/about',function(req, res){
    res.send("ye about page hai...");
})
app.listen(3000)