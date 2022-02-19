import express from 'express';
import cors from 'cors';
import appEvents  from './api/app-events.js'
import products from './api/products.js';

import dbConnect from './database/connection.js'

const app = express();

//database connection

//end database connection

//express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use(express.static(__dirname + '/public'))

//Listen to Events //
appEvents(app);

//api
products(app);


app.listen(8001, async () => {
    await dbConnect();
    console.log('Products listening on port 8001!')
})
.on('error', (err) => {
    console.log(err);
    process.exit();
})
