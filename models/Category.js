const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { Product } = require('./index.js');

class Category extends Model {}

Category.init(
  {
        // define column id
        id: {
          // id = number
          type: DataTypes.INTEGER,
          // not null
          allowNull: false,
          // instruct that this is the Primary Key
          primaryKey: true,
          // turn on auto increment
          autoIncrement: true
      },
      // define category_name
      category_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: 'id'
        }
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
