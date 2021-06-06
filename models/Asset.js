const { Model, DataTypes } = require('sequelize');

// TODO import/require sequelize from config file once server connection is established
//! const sequelize = (../config/connection);

class Asset extends Model {}

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    symbol: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
    },
    company_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    primary_exchange: {
        type: DataTypes.STRING(50),
        allowNull: false,        
    },
    open: {
        type: DataTypes.INTEGER(10,2),
        allowNull: false,
    },
    close: {
        type: DataTypes.INTEGER(10,2),
        allowNull: false,
    },
    daily_high: {
        type: DataTypes.INTEGER(10,2),
        allowNull: false,
    },
    daily_low: {
        type: DataTypes.INTEGER(10,2),
        allowNull: false,
    },
    market_open: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  }
);

model.exports = [ Asset ];