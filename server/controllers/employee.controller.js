const { Sequelize, DataTypes } = require("sequelize");

// UI Messages
const CONN_MSSG         = 'Connection has been established successfully.'
const CREATE_MSSG       = 'Employee table created successfully!'

const CONN_ERR_MSSG     = 'Unable to connect to the database: '
const CREATE_ERR_MSSG   = 'Unable to create table : '
const ADD_ERR_MSSG      = 'Failed to create a new record : '
const RETRIEVE_ERR_MSSG = 'Failed to retrieve data : '

// Configure ORM
const sequelize = new Sequelize(
 'ERP',
 'kwek',
 'Duckcity',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

// Establish connection w DB
sequelize.authenticate()
.then(() =>         {console.log(CONN_MSSG);})
.catch((error) =>   {console.error(CONN_ERR_MSSG, error);});

// Create a model / table
const Employee = sequelize.define("employees", {
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

// Add Employee to DB
  sequelize.sync()
  .then(() => {
     console.log(CREATE_MSSG);
  
     Employee.create({
         firstName: "Patito",
         lastName: "Duck",
         start_date: Date.now(),
         department: "Lazy People"
     }).then(res => {
         console.log(res)
         
         Employee.findAll()
         .then(res =>{
          console.log("All employee: ", res.map(e=>e.dataValues))
          
            Employee.findOne({
              where: {
                id : "1"
              }
            })
            .then(res =>   {console.log("Where id: ",res.dataValues)})
            .catch((error) => {console.error(RETRIEVE_ERR_MSSG, error);});
          
          }).catch((error) =>  {console.error(RETRIEVE_ERR_MSSG, error);});

      }).catch((error) => {console.error(ADD_ERR_MSSG, error);});

  }).catch((error) =>   {console.error(CREATE_ERR_MSSG, error);});