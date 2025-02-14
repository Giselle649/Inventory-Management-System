'use strict';
const { hashPassword } = require("../helpers/bcrypt");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //belongsto (Permissions)
      Member.belongsTo(models.Permission)
    }
  }
  Member.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "email must not be empty" },
        notNull: { msg: "email must not be null" },
        isEmail: {
          args: true,
          msg: "email must be in email format",
        },
      },
    },
    phoneNumber: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "password must not be empty" },
        notNull: { msg: "password must not be null" },
        min: {
          args: 5,
          msg: "Minimum password length is 5",
        },
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "first name must not be empty" },
        notNull: { msg: "first name must not be null" },
      },
    },
    lastName: DataTypes.STRING,
    gender: {
      type: DataTypes.CHAR,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Gender must not be empty" },
        notNull: { msg: "Gender must not be null" },
      },
    },
    lastLoginDate: DataTypes.DATE,
    lastLoginTime: DataTypes.TIME,
    PermissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Permission id must not be empty" },
        notNull: { msg: "Permission id must not be null" },
      },
    },
  }, {
    sequelize,
    modelName: 'Member',
  });

  Member.beforeCreate((instance) => {
    instance.password = hashPassword(instance.password);
  });

  return Member;
};