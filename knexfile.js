// Update with your config settings.
require('dotenv').config();


module.exports = {

    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL
    }

};