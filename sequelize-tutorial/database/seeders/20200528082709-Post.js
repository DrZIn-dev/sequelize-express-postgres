'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Posts",
            [
                {
                    UserId: 1,
                    title: "hispotan de nu",
                    content:
                        "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    UserId: 2,
                    title: 'some dummy title',
                    content:
                        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],

            {}
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
