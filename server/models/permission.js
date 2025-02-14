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
    itemsPage: DataTypes.STRING,
    categoriesPage: DataTypes.STRING,
    warehousesPage: DataTypes.STRING,
    elementsPage: DataTypes.STRING,
    productsPage: DataTypes.STRING,
    ordersPage: DataTypes.STRING,
    membersPage: DataTypes.STRING,
    permissionsPage: DataTypes.STRING,
    companiesPage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};