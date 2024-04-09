// the Completed model for managing completed tasks or projects
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Completed extends Model {}

Completed.init(
  {
    // Defines model attributes.
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
    // Define model options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'completed',
  }
);

module.exports = Completed;
