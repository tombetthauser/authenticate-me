'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert('Users', [
      {
        email: 'tom@mail.com',
        username: 'tombetthauser',
        hashedPassword: bcrypt.hashSync('password'),
      }
    ], { returning: true })

    for (let i = 0; i < 10; i++) {
      const firstName = faker.name.firstName().toLowerCase();
      const lastName = faker.name.lastName().toLowerCase();

      const user = await queryInterface.bulkInsert('Users', [
        {
          email: `${firstName}@mail.com`,
          username: firstName + lastName,
          hashedPassword: bcrypt.hashSync('password'),
        }
      ], { returning: true })
      users.push(user);
    };
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    return;
  }
};