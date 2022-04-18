// mysql sequelize database schemas
import {
    CreateProduct_DB,
    GetProducts_DB,
    UpdateProduct_DB,
    GetProductById_DB
} from '../database/repository/products-repository.js'


const CreateProduct = async (data) => {

    try {

        console.log("inside create products service")

        const result = CreateProduct_DB(data);

        return result;

    } catch (err) {
        console.log("Unable to create product :/")
    }
}

const GetProducts = async (location) => {

    try {

        const result = GetProducts_DB(location);

        return result;

    } catch (err) {
        console.log(err)
        console.log("Unable to get products :/")
    }
}

const GetProductById = async (id, t) => {

    try {

        let result = await GetProductById_DB(id, t);

        return result; 

    } catch (err) {
        console.log(err)
        console.log("Unable to update product :/")
        
    }

}

const UpdateProduct = async (id, data, t) => {

    try {

        const result = UpdateProduct_DB(id, data, t);

        return result;

    } catch (err) {
        console.log(err)
        console.log("Unable to update product from service :/")
        
    }

}


async function subscribe() {

    const { event, data } = payload;

    const { productId, name, location } = data;

    switch (event) {
        case 'ADD_TO_CART':
            addToCart();
            break;

        case 'REMOVE_FROM:CART':
            removeFromCart();
            break;

    }

}



export default {
    CreateProduct,
    GetProducts,
    UpdateProduct,
    GetProductById,
    subscribe
}

