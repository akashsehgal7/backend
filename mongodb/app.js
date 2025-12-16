const express = require('express');
const app = express();
const userModel = require('./usermodel');
const { name } = require('ejs');
app.get('/',(req, res)=> {
    res.send("hey")
})
app.get('/create', async (req, res)=>{
    let createduser = await userModel.create({
        name: "harshita",
        email: "harshita@gmail.com",
        username: "harshita"
    });
    res.send(createduser);
})
app.get('/update', async (req, res)=>{
    let userUpdated = await userModel.findOneAndUpdate({username: "harsh"}, {name: "harsh vandana sharma"}, {new: true});
    res.send(userUpdated);
})
app.get('/readall', async (req, res)=> {
    let readuser = await userModel.find();
    res.send(readuser);
})
app.get('/readone', async (req, res)=> {
    let readuser = await userModel.findOne({username: "harsh"});
    res.send(readuser);
})
app.get('/delete',async (req, res)=> {
    let userDeleted = await userModel.findOneAndDelete({username: "harshita"});
    res.send(userDeleted);
})
app.listen(3000, function(){
    console.log("its running...");
    
})