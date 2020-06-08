'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'Users',
        [
          {
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Jon Doe',
            email: 'jondoe@example.com',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {},
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
