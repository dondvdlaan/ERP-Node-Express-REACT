// *** Imports ***
const { DataTypes } = require("sequelize");
const {db }         = require( '../database/dbInit');
const messages      = require('../helper/messages');

/**
 * Model for Employee
 */
const createModelEmployee = () =>{

  // Create a model / table
  const Employee = db.define("employees", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
    },
    department: {
      type: DataTypes.STRING,
    }
  });

  // Insert table Employee in to DB
  db.sync()
  // .then(() =>         {console.log(messages.ADD_MSSG);})
  .catch((error) =>   {console.error(messages.ADD_ERR_MSSG, error);
  });
}

module.exports = {createModelEmployee}