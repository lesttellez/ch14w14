const Sequelize = require('sequelize');

//allow for use of .env data
require('dotenv').config();

// create connection to db, whether local on on heroku using jawsdb
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });
}

module.exports = sequelize;