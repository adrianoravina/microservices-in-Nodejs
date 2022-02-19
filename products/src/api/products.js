import service from '../services/products-service.js'
import { sequelize } from "../database/connection.js";

const products = (app) => {

    app.post('/products', async (req, res, next) => {

        try {
            //const { name, stock, location } = req.body; 

            const dataInput = {

                name: "Blue Mountain Coffee",
                stock: 220,
                location: "Berlin",
                seller_id: "bluemtn@tech.com",
                price: 3.4
            }



            // validation
            const data = await service.CreateProduct(dataInput);
            return res.json(data);

        } catch (err) {
            next(err)
        }

    });

    app.get('/products/:location', async (req, res, next) => {

        console.log("SUPP")

        try {

            const { location } = req.params;

            //const { name, stock, location } = req.body; 
            console.log(location)

            // validation
            const data = await service.GetProducts(location);

            //console.log(data)

            return res.json(data);

        } catch (err) {
            next(err)
        }

    });

    app.get('/products/category/:type', async (req, res, next) => {

        const type = req.params.type;

        try {
            const { data } = await service.GetProductsByCategory(type)
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

    app.put('/products/:id/stock', async (req, res, next) => {

        const quantity = req.body.quantity;
        const id = req.params.id;
        const t = await sequelize.transaction();

        const product = await service.GetProductById(id, t)

        if (product.length === 0) {

            return res.sendStatus(400)
        }

        const oldstock = product[0].dataValues.stock
        const newstock = oldstock - quantity;

        if (newstock < 0) return res.sendStatus(400)

        const data = { 
            "stock": newstock 
        }


        try {

            const updateResponse = await service.UpdateProduct(id, data, t)

            if (updateResponse[0] !== 1) {
                await t.rollback();
                return res.sendStatus(400)
            }

            await t.commit();
            return res.sendStatus(200)

        } catch (err) {
            console.log("err")
            await t.rollback();
            return res.sendStatus(401)
        }

    });


    app.put('/products/:id/stock/rollback', async (req, res, next) => {

        const quantity = req.body.quantity;
        const id = req.params.id;

        const t = await sequelize.transaction();

        const product = await service.GetProductById(id, t)

        if (product.length === 0) {

            return res.sendStatus(400)
        }

        const oldstock = product[0].dataValues.stock
        const newstock = oldstock + quantity;

        const data = { 
            "stock": newstock 
        }

        try {

            const updateResponse = await service.UpdateProduct(id, data, t)

            if (updateResponse[0] !== 1) {
                await t.rollback();
                return res.sendStatus(400)
            }

            await t.commit();
            return res.sendStatus(200)

        } catch (err) {
            console.log(err)
            await t.rollback();
            res.status(400)
        }

    });


    app.get('/products/', async (req, res, next) => {



        try {

            return res.send("Works! Greeting from Products service :D")

        } catch (err) {
            next(err)
        }

    });

}

export default products;