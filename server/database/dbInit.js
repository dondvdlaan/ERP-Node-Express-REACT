// *** Imports ***
const { Sequelize, DataTypes }  = require("sequelize");
const messages                  = require('../helper/messages');

// *** Constants and variables ***
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/config.js')[env];
// Configure ORM
const db        = new Sequelize(   config.database, 
                                   config.username, 
                                   config.password, 
                                   config);

/**
 * Initialising DB
 */
const dbInit = () =>{

    // Establish connection w DB
    return db.authenticate()
            .catch((error) =>   {console.error(messages.CONN_ERR_MSSG, error);});
}

exports.dbInit = dbInit;
exports.db = db;