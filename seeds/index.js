const sequelize = require('../config/connection');
const { Auth, Todo, Working, Completed } = require('../models');

// Importing data.
const authData = require('./authData.json');
const todoData = require('./todoData.json');
const workingData = require('./workingData.json');
const completedData = require('./completedData.json')
const TimeManager = require('als-time-manager');

// Function to seed the database with sample data
const seedDatabase = async () => {
  // Syncing the models with the database and force dropping current tables
  await sequelize.sync({ force: true });

  // Creates Auth records in the database using bulkCreate.
  const auths = await Auth.bulkCreate(authData, {
    individualHooks: true, // Triggering hooks for each record
    returning: true, // Returning the created records
  });

  // Creates Todo records in the database.
  for (const todo of todoData) {
    await Todo.create({
      ...todo,
      auth_id: auths[Math.floor(Math.random() * auths.length)].id, 
    });
  }

  // Creates Working records in database
  for (const working of workingData) {
    await Working.create({
      ...working,
      auth_id: auths[Math.floor(Math.random() * auths.length)].id, 
    });
  }

  // Creates Completed records in database.
  for (const completed of completedData) {
    await Completed.create({
      ...completed,
      auth_id: auths[Math.floor(Math.random() * auths.length)].id, 
    });
  }

  // Exits the process after seeding the database.
  process.exit(0);
};

// Calls the seedDatabase function to initiate the seeding.
seedDatabase();
