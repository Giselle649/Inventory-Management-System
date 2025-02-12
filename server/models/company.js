'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    name: DataTypes.STRING,
    serviceCharge: DataTypes.FLOAT,
    vatCharge: DataTypes.FLOAT,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    country: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};