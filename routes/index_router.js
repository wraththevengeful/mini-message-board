const express = require('express')
const indexRouter = express.Router();
const messages = require('../models/messages');

indexRouter.get("/", (req, res) => {
    res.render("index", {title:"Mini Message Board", messages: messages });
})

module.exports = indexRouter;