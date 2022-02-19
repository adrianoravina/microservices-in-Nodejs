import { Sequelize } from "sequelize";
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.dialect || "mysql",
  port: 3306
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./Customers.model.js")(sequelize, Sequelize);
db.cart = require("./Cart.model.js")(sequelize, Sequelize);

export default db;