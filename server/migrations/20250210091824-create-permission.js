'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      itemPage: {
        type: Sequelize.STRING
      },
      categoryPage: {
        type: Sequelize.STRING
      },
      warehousePage: {
        type: Sequelize.STRING
      },
      elementPage: {
        type: Sequelize.STRING
      },
      productPage: {
        type: Sequelize.STRING
      },
      orderPage: {
        type: Sequelize.STRING
      },
      memberPage: {
        type: Sequelize.STRING
      },
      permissionPage: {
        type: Sequelize.STRING
      },
      companyPage: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};