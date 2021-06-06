const { Model, DataTypes } = require('sequelize');
// TODO require/import sequelize once connection is established in config/connection.js
//const sequelize = require('../config/connection');

class Asset extends Model {}

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    stock_symbol: {
      type: DataTypes.STRING(10),
    },
    current_price: {
      type: DataTypes.INTEGER(10,4),
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    daily_low: {
      type: DataTypes.INTEGER(10,4),
      allowNull: false,
    },
    daily_high: {
      type: DataTypes.INTEGER(10,4),
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'asset',
  }
);

module.exports = Asset;