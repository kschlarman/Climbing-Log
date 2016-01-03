'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {

    queryInterface.createTable('climbs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      grade: Sequelize.STRING,
      type: Sequelize.STRING,
      location: Sequelize.STRING,
      lead: Sequelize.BOOLEAN,
      notes: Sequelize.TEXT,
      date: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('climbs');
  }
};

