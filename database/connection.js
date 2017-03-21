const pgp = require('pg-promise')()

const connection = {
    host: 'localhost',
    port: 5432,
    database: 'coyote'
}

const db = pgp(connection)

module.exports = { db }
