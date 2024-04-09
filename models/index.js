// Defines assoc. between Auth, Todo, Working, and Completed models
const Auth = require('./Auth');
const Todo = require('./Todo');
const Working = require('./Working');
const Completed = require('./Completed');

// Defines assoc. between Auth and Todo, Working, Completed models
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

// Defines link between Todo, Working, Completed and Auth models
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
