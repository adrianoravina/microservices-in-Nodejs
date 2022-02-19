export default (sequelize, Sequelize) => {
    const OrderItems = sequelize.define(
      "orderitems",
      {
        idordersItems: {
          type: Sequelize.INTEGER(255),
          primaryKey: true,
          autoIncrement: true,
        },
        order_id: {
          type: Sequelize.INTEGER(255),
        },
        product_id: {
          type: Sequelize.INTEGER(255),
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return OrderItems;
  };