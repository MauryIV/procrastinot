// Defines the Working model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Working extends Model {}

Working.init(
  {
    // Defines attributes for Working model
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
        model: "auth",
        key: "id",
      },
    },
  },
  {
    // Defines options for Working model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "working",
  }
);

module.exports = Working;
