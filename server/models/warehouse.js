'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //sequelize super many to many (many to many & double one to many)
      //many to many [belongstomany] (Products)
      Warehouse.belongsToMany(models.Product, {through: 'WarehouseProduct'})

      //double one to many [hasMany] (WarehouseProducts)
      Warehouse.hasMany(models.WarehouseProduct)
    }
  }
  Warehouse.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};