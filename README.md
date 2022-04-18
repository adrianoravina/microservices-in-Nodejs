# microservices-in-Nodejs

Microservice back-end architecture as part of my "Recipe App" company system. 

### Install dependencies.
$ yarn

Create a .ENV file in the root directory of each service with following fields. 
You must have the database creation script to be able to retrieve the data or create your own with the following credentials.
# ----Dev environment
`DB_HOST=127.0.0.1`  
`DB_USER=<your mysql username>`  
`DB_PASSWORD=<your mysql password>`  
`DB_DATABASE=carBuilder`   
`DB_DIALECT=mysql`  
`DB_PORT=<your mysql port. most likely 3306>`

Run application in development mode, will provide nodemon for continues recompile.
$ yarn run dev
  

### App info.

Application is written in Node js with express.  
To run the application in development mode, use the `$ yarn run dev` script  
