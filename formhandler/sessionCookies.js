const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
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
app.get('/about',function(req, res){
    res.send("ye about page hai...");
})
app.get('/profile',function(req, res, next){
     return next(new Error("something went wrong !"))
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong, we don't have any idea !")
})
app.listen(3000)