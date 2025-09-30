const db = require('../db/query');

async function getMessageDetails(req,res) {
    const message = await db.getSingleMessage(req.params.id);
    console.log(message[0]);
    res.render('details',{message:message[0]});
}

module.exports = {
    getMessageDetails
}