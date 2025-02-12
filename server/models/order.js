'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //sequelize super many to many (many to many & double one to many)
      //many to many [belongstomany] (WarehouseProducts)
      Order.belongsToMany(models.WarehouseProduct, {through: 'OrderWarehouseProduct'})

      //double one to many [hasMany] (OrderWarehouseProducts)
      Order.hasMany(models.OrderWarehouseProduct)
    }
  }
  Order.init({
    clientName: DataTypes.STRING,
    clientAddress: DataTypes.STRING,
    clientPhoneNumber: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    paidStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};