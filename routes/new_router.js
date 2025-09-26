const express = require('express');
const newRouter = express.Router();

newRouter.get("/", (req,res) => {
    res.render("form");
});

newRouter.post("/", (req,res)=>{

})

module.exports = newRouter;