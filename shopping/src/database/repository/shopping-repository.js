
import Orders from "../../models/Orders.js";
import OrderItems from "../../models/OrderItems.js";

const CreateOrder_DB = async (data, t) => {

    try {

        const productResult = await Orders.create(data,
            { transaction: t });

            return undefined;

        //return productResult;

    } catch (err) {

        console.log(err)
        console.log("Some error occurred while creating the product in repository.")
    }


}

const CreateOrderItems_DB = async (dataInputs) => {

    try {


        const productResult = await OrderItems.create(dataInputs);

        return productResult;

    } catch (err) {


        console.log(err)
        console.log("Some error occurred while creating the product in repository.")
    }


}

export { CreateOrder_DB, CreateOrderItems_DB };
