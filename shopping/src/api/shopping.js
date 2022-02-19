import service from '../services/shopping-service.js'
import { sequelize } from "../database/connection.js";
import axios from 'axios';

const shopping = (app) => {

    app.post('/shopping', async (req, res, next) => {

        const data = {
            product_id: 2,
            total_price: 17,
            tracking_number: 5 + "xxxxx1xxddb" + Date.now(),
            customer_id: "paul@tech.com",
            qty: 4
        }

        const response = await axios.put(`http://localhost:8001/products/${data.product_id}/stock`, {
            quantity: data.qty
        })

        if (response.status === 400) {
            await t.rollback();
            return res.status(200).send("Could not create order");
        }

        const t = await sequelize.transaction();

        try {

            // validation
            await service.CreateOrder(data, t);

            await t.commit();
            return res.sendStatus(200)


        } catch (e) {
            console.log(e)
            console.log(data.qty)
            //send a new call to update/rollback to previous stock before transaction
            const response = await axios.put(`http://localhost:8001/products/${data.product_id}/stock/rollback`, {
                quantity: data.qty
            })

            if(!response){
                //do something
                //this becomes an issue because if their is a problem with the network, it will not 
                //update and there will be data inconsistency
            }

            await t.rollback();
            res.sendStatus(400)
        }

    });

    app.get('/category/:type', async (req, res, next) => {

        const type = req.params.type;

        try {
            const { data } = await service.GetProductsByCategory(type)
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

    app.get('/', async (req, res, next) => {



        try {

            return res.send("Works! Greeting from Shopping service :D")

        } catch (err) {
            next(err)
        }

    });

}

export default shopping;