import express from 'express';
import cors from 'cors';
import shopping from './api/shopping.js'
import appEvents from './api/app-events.js'


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
shopping(app);


app.listen(8002, async () => {
    await dbConnect();
    console.log('Shopping server listening on port 8002!')
})
.on('error', (err) => {
    console.log(err);
    process.exit();
})

/*

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from products service!" })
});

*/