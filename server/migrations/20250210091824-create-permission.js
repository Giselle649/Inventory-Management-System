'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      itemsPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      categoriesPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      warehousesPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      elementsPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      productsPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      ordersPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      membersPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      permissionsPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      companiesPage: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: true
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};