const express = require('express');
const newRouter = express.Router();
const messages = require('../models/messages')

newRouter.get("/", (req,res) => {
    res.render("form");
});

newRouter.post("/", (req,res)=>{
    messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
    res.redirect('/');
})

module.exports = newRouter;