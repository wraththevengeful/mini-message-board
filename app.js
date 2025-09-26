const express = require('express')
const app = express()
const path = require('node:path')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index_router");
const newRouter = require("./routes/new_router");

app.use('/', indexRouter);

app.use('/new', newRouter);

const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log('Running on PORT:', PORT);
})