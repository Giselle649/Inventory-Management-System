'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //hasmany (Members)
      Permission.hasMany(models.Member)
    }
  }
  Permission.init({
    name: DataTypes.STRING,
    itemPage: DataTypes.STRING,
    categoryPage: DataTypes.STRING,
    warehousePage: DataTypes.STRING,
    elementPage: DataTypes.STRING,
    productPage: DataTypes.STRING,
    orderPage: DataTypes.STRING,
    memberPage: DataTypes.STRING,
    permissionPage: DataTypes.STRING,
    companyPage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};