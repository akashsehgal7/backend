const express = require('express');
const userModel = require("./models/user");
const postModel = require("./models/post");
const app = express();
app.get('/', (req, res)=> {
    res.send("hey");
})
app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username: "harsh",
        age: 22,
        email: "harsh@gmail.com"
    });
    res.send(user)
})
app.get('/post/create', async (req, res)=> {
    let post = await postModel.create({
        postdata: "Hello sare log kase ho!!!",
        postid: "694ad5bcda198660822cf2cc"
    })
    let user = await userModel.findOne({_id: "694ad5bcda198660822cf2cc"});
    console.log(user);
    user.post.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);