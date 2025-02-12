'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderWarehouseProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Orders",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      WarehouseProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: "WarehouseProducts",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('OrderWarehouseProducts');
  }
};