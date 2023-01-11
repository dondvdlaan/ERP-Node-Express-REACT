// *** Imports ***
const model     = require('../models/employee.model');
const messages  = require('../helper/messages');

// *** Constants and variables ***


// *** Functions ***
// const createModels = () =>{
//     console.log("createModels");
// }

/**
 * Create DB
 */
const dbCreate = () =>{

    // Create models in DB
    model.createModelEmployee();  
}

exports.dbCreate = dbCreate;