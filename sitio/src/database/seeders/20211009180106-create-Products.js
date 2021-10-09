'use strict';
let products = require('../../data/products')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('products', products,{});
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('products', null, {});
     
  }
};
