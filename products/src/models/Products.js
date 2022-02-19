import  Sequelize  from "sequelize";
import {sequelize} from '../database/connection.js'

    const Products = sequelize.define(
      "products",
      {
        idproducts: {
          type: Sequelize.INTEGER(255),
          primaryKey: true,
          autoIncrement: true,
        },
        stock: {
          type: Sequelize.INTEGER(6),
        },
        name: {
          type: Sequelize.STRING(255),
        },
        location: {
          type: Sequelize.STRING(255),
        },
        price: {
          type: Sequelize.DECIMAL(9,2),
        },
        seller_id: {
          type: Sequelize.STRING(255),
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );

    export default Products;
  