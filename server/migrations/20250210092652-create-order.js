'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      clientAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      clientPhoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: false,
      },
      paidStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};