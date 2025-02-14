'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      },
      gender: {
        type: Sequelize.CHAR,
        allowNull: false,
        unique: false
      },
      lastLoginDate: {
        type: Sequelize.DATE,
        allowNull: true,
        unique: false
      },
      lastLoginTime: {
        type: Sequelize.TIME,
        allowNull: true,
        unique: false
      },
      PermissionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: "Permissions",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Members');
  }
};