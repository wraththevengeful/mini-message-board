const express = require('express');
const newRouter = express.Router();
// const messages = require('../models/messages')
const newController = require("../controllers/new_controllers");

newRouter.get("/", newController.getRenderTheForm);

newRouter.post("/", newController.postAddMessage)

module.exports = newRouter;