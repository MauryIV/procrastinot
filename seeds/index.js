const sequelize = require('../config/connection');
const { Auth, Todo, Working, Completed } = require('../models');

const authData = require('./authData.json');
const todoData = require('./todoData.json');
const workingData = require('./workingData.json');
const completedData = require('./completedData.json')
const TimeManager = require('als-time-manager');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const auths = await Auth.bulkCreate(authData, {
    individualHooks: true,
    returning: true,
  });

  for (const todo of todoData) {
    await Todo.create({
      ...todo,
      auth_id: auths[Math.floor(Math.random() * auths.length)].id,
    });
  }
  for (const working of workingData) {
    await Working.create({
      ...working,
      auth_id: auths[Math.floor(Math.random() * auths.length)].id,
    });
  }
  for (const completed of completedData) {
    await Completed.create({
      ...completed,
      auth_id: auths[Math.floor(Math.random() * auths.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
