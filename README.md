# microservices-in-Nodejs

Microservice back-end architecture as part of my "Recipe App" company system. 

### Install dependencies.
$ yarn

Create a .ENV file in the root directory of each service with following fields. Interchange the database name on each .env file with (products_db, shopping_db)
You must have the database creation script to be able to retrieve the data or create your own with the following credentials.
# ----Dev environment
DB_DATABASE=products_db
DB_USER=root
DB_PASSWORD=root
DB_HOST=127.0.0.1
DB_DIALECT=mysql
DB_PORT=3306

Run application in development mode, will provide nodemon for continues recompile.
$ yarn run dev
  

### App info.

Application is written in Node js with express.  
To run the application in development mode, use the `$ yarn run dev` script  
