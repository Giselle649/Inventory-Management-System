'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductElementValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //sequelize super many to many (many to many & double one to many)
      //double one to many [belongsTo] (Product)
      ProductElementValue.belongsTo(models.Product)

      //double one to many [belongsTo] (ElementValues)
      ProductElementValue.belongsTo(models.ElementValue)
    }
  }
  ProductElementValue.init({
    ProductId: DataTypes.INTEGER,
    ElementValueId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductElementValue',
  });
  return ProductElementValue;
};