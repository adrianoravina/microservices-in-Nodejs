import  Sequelize  from "sequelize";
import {sequelize} from "../database/connection.js";

const Orders = sequelize.define(
  "orders",
  {
    idorders: {
      type: Sequelize.INTEGER(255),
      primaryKey: true,
      autoIncrement: true,
    },
    tracking_number: {
      type: Sequelize.STRING(255),
    },
    customer_id: {
      type: Sequelize.STRING(255),
    },
    total_price: {
      type: Sequelize.FLOAT(255)
    },
    product_id:{
      type: Sequelize.INTEGER(255)
    },
    date_created:{
      type: Sequelize.DATE(6),
        //defaultValue: Sequelize.DATE(6),
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Orders;
  