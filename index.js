const express = require('express')
const app = express()
const path = require('node:path')
const pool = require("./db/pool")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index_router");
const newRouter = require("./routes/new_router");
const openRouter = require("./routes/open_router");

app.use('/', indexRouter);

app.use('/new', newRouter);

app.use('/open', openRouter)

const PORT = 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log('Running on PORT:', PORT);
})