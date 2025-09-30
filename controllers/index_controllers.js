const db = require('../db/query');

async function getIndexRouter(req, res) {
    const dbmessages = await db.getAllMessages();
    console.log(dbmessages);
    res.render("index", {title: "Mini Message Board", messages: dbmessages });
}

module.exports = {
    getIndexRouter,
}