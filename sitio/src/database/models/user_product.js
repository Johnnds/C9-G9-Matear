'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Product.belongsTo(models.Order,{
        as : 'order',
        foreignKey : 'orderId',
        onDelete : 'cascade'
      })
      User_Product.belongsTo(models.Product,{
        as : 'product',
        foreignKey : 'productId',
      })
    }  
    
  };
  User_Product.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total: DataTypes.DECIMAL(8,2)
  }, {
    sequelize,
    modelName: 'User_Product',
  });
  return User_Product;
};