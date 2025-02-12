'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //belongsTo (Items, Categories)
      Product.belongsTo(models.Item)
      Product.belongsTo(models.Category)


      //sequelize super many to many (many to many & double one to many)
      //many to many [belongstomany] (ElementValues)
      Product.belongsToMany(models.ElementValue, {through: 'ProductElementValue'})

      //double one to many [hasMany] (ProductElementValues)
      Product.hasMany(models.ProductElementValue)


      //sequelize super many to many (many to many & double one to many)
      //many to many [belongstomany] (Warehouses)
      Product.belongsToMany(models.Warehouse, {through: 'WarehouseProduct'})

      //double one to many [hasMany] (WarehouseProducts)
      Product.hasMany(models.WarehouseProduct)
    }
  }
  Product.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    availability: DataTypes.STRING,
    description: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};