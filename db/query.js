const pool = require("./pool")

async function getAllMessages() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertAMessage(message){
    await pool.query("INSERT INTO messages (username, messageText) VALUES ($1, $2)",[message.username, message.messageText]);
}

async function getSingleMessage(id) {
    const {rows} = await pool.query("SELECT * FROM messages WHERE id = $1",[id]);
    return rows;
}

module.exports = {
    getAllMessages,
    insertAMessage,
    getSingleMessage
}