const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// TODO import/require sequelize from config file once server connection is established in /config/connnection.js
//! const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginpw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    f_name: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    l_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        //! regex validates password is of at least 10 chars in length, & contains at least 1 lower, 1 upper, 1 special, 1 integer
        is: ['/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*W).*$/gm'],
        msg: 'Password must contain at least 1 uppercase, 1 lowercase, 1 special character, 1 number & be a minimum of 10 characters',
        //? Not positive if we need the '' around the regex? But I think so since...
        //? we are validating from a string DataType from the user input.
        //? is: [/^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/gm],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password,10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;