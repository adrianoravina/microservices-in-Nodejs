export default (sequelize, Sequelize) => {
    const Customers = sequelize.define(
      "Customers",
      {
        id: {
          type: Sequelize.INTEGER(255),
          primaryKey: true,
          autoIncrement: true,
        },
        Email: {
          type: Sequelize.STRING(255),
        },
        Address: {
          type: Sequelize.STRING(255),
        },
        Name: {
          type: Sequelize.STRING(255),
        },
        Location: {
          type: Sequelize.STRING(255),
        },
        Date_created: {
          type: Sequelize.DATE(6),
          defaultValue: Sequelize.DATE(6),
        }
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  
    return Customers;
  };
  