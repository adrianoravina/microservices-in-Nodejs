import  Sequelize  from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mysql",
  port: port,
  logging: false,
});


const dbConnect = async () => {

  try {
    await sequelize.authenticate();
    return console.log(`Connected to database ${database}`);
  } catch (error) {
    return console.log(`could not connect to database ${database}`);
  }
};

export default dbConnect;
export {sequelize};
