// Defines the Todo model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo extends Model {}

Todo.init(
  {
    // defines attributes for Todo model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    time_applied: {
      type: DataTypes.INTEGER,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    auth_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'auth',
        key: 'id',
      },
    },
  },
  {
    // shows options for Todo model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'todo',
  }
);

module.exports = Todo;
