import {CreateOrder_DB, CreateOrderItems_DB} from '../database/repository/shopping-repository.js'


const CreateOrder = async (data, t) => { 

    try {

        const result = CreateOrder_DB(data, t);

        return result;

    } catch (err) {
        console.log("Unable to create order :/")
    }
}

const CreateOrderItems = async (location) => {

    try {

        const result = CreateOrderItems_DB(location);

        return result;

    } catch (err) {
        console.log(err)
        console.log("Unable to create orderitems :/")
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
    CreateOrder,
    CreateOrderItems,
    subscribe
}