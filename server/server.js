// *** Imports ***
const cors 	                = require('cors');
const express 	            = require('express');
const env                   = process.env.NODE_ENV || 'development';
const customerController    = require('./controllers/customer.controller');
const {dbInit }             = require( './database/dbInit');
const {dbCreate }           = require( './database/db');
const messages              = require('./helper/messages');

// *** Constants and variables ***
const server 	= express();
const port      = process.env.REACT_APP_SERVER_PORT;

// *** Middleware ***
server.use(cors());
server.use(express.json());

// *** Connect Controllers ***
server.use('/customer', customerController);




// Initialisation
const init = () =>{

    // Connect to DB
    dbInit()

    // Create models
    .then(dbCreate())
    .then(()=> {
        
       // Server starts listening
       server.listen(port,
                    () => console.log(messages.SERVER_LIS , port)); 
    }) 
}

init();