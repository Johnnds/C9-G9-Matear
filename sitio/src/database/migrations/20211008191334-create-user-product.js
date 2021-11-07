'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
       references: {
        model: {
          tableName: 'Users'
        },
        key: 'id'
       }
      },
      productId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'Products'
          },
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DECIMAL(8,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_Products');
  }
};