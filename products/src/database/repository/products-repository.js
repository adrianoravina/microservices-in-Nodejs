
import Products from "../../models/Products.js";

const CreateProduct_DB = async (dataInputs) => {

    try {


        const productResult = await Products.create(dataInputs);

        return productResult;

    } catch (err) {


        console.log(err)
        console.log("Some error occurred while creating the product in repository.")
    }


}

const GetProducts_DB = async (location_param) => {

    try {

        const productResult = await Products.findAll({ where: { location: location_param } });

        return productResult;

    } catch (err) {


        console.log(err)
        console.log("Some error occurred while creating the product in repository.")
    }


}

const GetProductById_DB = async (id, t) => {

    try {
        const productResult = await Products.findAll({
            where: { idproducts: id }
        },
            { transaction: t })

        return productResult

    } catch (err) {
        console.log(err)
        console.log("Some error occurred while fetching the product in repository.")
        
    }

}

const UpdateProduct_DB = async (id, data, t) => {

    try {

        const productResult = await Products.update(data, {
            where: {
                idproducts: id
            }
        },

            { transaction: t });

        return productResult;

    } catch (err) {
        console.log(err)
        console.log("Some error occurred while creating the product in repository.")
        
    }


}

export {
    CreateProduct_DB,
    GetProducts_DB,
    UpdateProduct_DB,
    GetProductById_DB
};
