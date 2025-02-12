'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WarehouseProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //sequelize super many to many (many to many & double one to many)
      //double one to many [belongsTo] (Warehouses)
      WarehouseProduct.belongsTo(models.Warehouse)

      //double one to many [belongsTo] (Products)
      WarehouseProduct.belongsTo(models.Product)

      //sequelize super many to many (many to many & double one to many)
      //many to many [belongstomany] (Orders)
      WarehouseProduct.belongsToMany(models.Order, {through: 'OrderWarehouseProduct'})
      //double one to many [hasMany] (OrderWarehouseProducts)
      WarehouseProduct.hasMany(models.OrderWarehouseProduct)
    }
  }
  WarehouseProduct.init({
    WarehouseId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WarehouseProduct',
  });
  return WarehouseProduct;
};