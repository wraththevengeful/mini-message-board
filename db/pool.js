const {Pool} = require(`pg`);

module.exports = new Pool({
    // connectionString:process.env.DATABASE_URL
    connectionString:"postgresql://wrath:poorni@localhost:5432/minimessageboard"
})