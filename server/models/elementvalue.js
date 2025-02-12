'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ElementValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //belongsto (Elements)
      ElementValue.belongsTo(models.Element)


      //sequelize super many to many (many to many & double one to many)
      //many to many [belongstomany] (Products)
      ElementValue.belongsToMany(models.Product, {through: 'ProductElementValue'})

      //double one to many [hasMany] (ProductElementValues)
      ElementValue.hasMany(models.ProductElementValue)
    }
  }
  ElementValue.init({
    name: DataTypes.STRING,
    ElementId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ElementValue',
  });
  return ElementValue;
};