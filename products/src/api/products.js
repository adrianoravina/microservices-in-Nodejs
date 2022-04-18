import service from '../services/products-service.js'
import { sequelize } from "../database/connection.js";

const products = (app) => {

    app.post('/products', async (req, res, next) => {

        try {
            const request_data = req.body;

            // validation
            const data = await service.CreateProduct(request_data);

            return res.status(200).json(data);

        } catch (err) {
            return res.status(400).send('Bad request');
        }

    });

    app.get('/products', async (req, res, next) => {


        try {

            const { location } = req.params;

            // validation
            const data = await service.GetProducts(location);

            return res.status(200).json(data);

        } catch (err) {
            res.status(400).send('Bad request');
        }

    });


    app.put('/products/:id', async (req, res, next) => {

        const quantity = req.body.quantity;
        const id = req.params.id;
        const t = await sequelize.transaction();

        try {
            
            //check stock

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

            //end check stock

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

    app.delete('/products/:id', async (req, res, next) => {


        const { id } = req.params

        try {

            /*

            const data = await service.DeleteProduct(id);

            return res.status(200).json(data);

            */

        } catch (err) {
            next(err)
        }

    });

}

export default products;