// Imports Sequelize
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Checks if a database URL is given in the environment variables
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres'
  });
} else {
  // If no URL is provided, it will create a Sequelize with connection details from environment variables
  sequelize = new Sequelize(
    process.env.DB_NAME,    
    process.env.DB_USER,    
    process.env.DB_PASSWORD,  
    {
      host: 'localhost',    
      dialect: 'postgres',  
    }
  );
}

// Tests the database connection by authenticating with the database. Also logs whether or not it was able to connect to the database successfully.
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been created successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Exports the Sequelize to be used in other places
module.exports = sequelize;
