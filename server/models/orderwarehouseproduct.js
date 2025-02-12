'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderWarehouseProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       //sequelize super many to many (many to many & double one to many)
      //double one to many [belongsTo] (Orders)
      OrderWarehouseProduct.belongsTo(models.Order)

      //double one to many [belongsTo] (WarehouseProducts)
      OrderWarehouseProduct.belongsTo(models.WarehouseProduct)
    }
  }
  OrderWarehouseProduct.init({
    OrderId: DataTypes.INTEGER,
    WarehouseProductId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderWarehouseProduct',
  });
  return OrderWarehouseProduct;
};