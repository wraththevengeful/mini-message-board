const express = require(`express`);
const openRouter = express.Router();
const messages = require('../models/messages')
const openController = require("../controllers/open_controllers")

openRouter.get("/:id",openController.getMessageDetails)


module.exports = openRouter;