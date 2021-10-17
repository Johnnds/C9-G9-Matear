'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Users', [
        {
          name : 'Jonathan',
          lastName: 'Sanchez',
          genre: 'masculino',
          email : 'johnnds@gmail.com',
          password : bcrypt.hashSync('123456',10),
          avatar : 'default-av.png',
          rolId : 1,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name : 'Lucio',
          lastName: 'Martinez',
          genre: 'masculino',
          email : 'lucio@gmail.com',
          password : bcrypt.hashSync('123456',10),
          avatar : 'default-av.png',
          rolId : 1,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name : 'Marisol',
          lastName: 'Contreras',
          genre: 'femenino',
          email : 'marisol-contreras-@gmail.com',
          password : bcrypt.hashSync('123456',10),
          avatar : 'default-av.png',
          rolId : 1,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name : 'Erik',
          lastName: 'Mena',
          genre: 'masculino',
          email : 'erik@gmail.com',
          password : bcrypt.hashSync('123456',10),
          avatar : 'default-av.png',
          rolId : 1,
          createdAt : new Date,
          updatedAt : new Date
        },
        {
          name : 'Cristian',
          lastName: 'Elias',
          genre: 'masculino',
          email : 'cristian@gmail.com',
          password : bcrypt.hashSync('123456',10),
          avatar : 'default-av.png',
          rolId : 1,
          createdAt : new Date,
          updatedAt : new Date
        },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};