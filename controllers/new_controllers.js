const db = require('../db/query');

function getRenderTheForm(req, res) {
    res.render("form");
}

async function postAddMessage(req, res) {
    const message = {
        username: req.body.author,
        messageText: req.body.message,
    };

    await db.insertAMessage(message);
    res.redirect('/');
}

module.exports = {
    getRenderTheForm,
    postAddMessage
}