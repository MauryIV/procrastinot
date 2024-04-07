const Auth = require('./Auth');
const Todo = require('./Todo');
const Working = require('./Working');
const Completed = require('./Completed');
// const TimeManager = require('als-time-manager');

// const timeManager = new TimeManager();

Auth.hasMany(Todo, {
  foreignKey: 'auth_id',
  onDelete: 'CASCADE'
});

Auth.hasMany(Working, {
  foreignKey: 'auth_id',
  onDelete: 'CASCADE'
});

Auth.hasMany(Completed, {
  foreignKey: 'auth_id',
  onDelete: 'CASCADE'
});

Todo.belongsTo(Auth, {
  foreignKey: 'auth_id'
});

Working.belongsTo(Auth, {
  foreignKey: 'auth_id'
});

Completed.belongsTo(Auth, {
  foreignKey: 'auth_id'
});

module.exports = { Auth, Todo, Working, Completed };
