const express = require('express')
const indexRouter = express.Router();
// const messages = require('../models/messages');
const indexController = require("../controllers/index_controllers")

indexRouter.get("/",indexController.getIndexRouter)

module.exports = indexRouter;