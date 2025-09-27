const express = require(`express`);
const openRouter = express.Router();
const messages = require('../models/messages')

openRouter.get("/:index",(req,res)=>{
    const message = messages[req.params.index];
    if(!message) return res.status(404).send(`Message not found`);
    res.render('details',{message});
})


module.exports = openRouter;