'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderWarehouseProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      OrderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: "Orders",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      WarehouseProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        references: {
          model: "WarehouseProducts",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      quantity: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('OrderWarehouseProducts');
  }
};