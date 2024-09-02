import { protectedInstance } from "./instance"

const orderServices = {

    createOrder: async (total) => {
        return await protectedInstance.post('/orders/order', {
            total
        });
    },
    getOrders: async () => {
        return await protectedInstance.get('/orders/');
    },
    getAllOrders: async () => {
        return await protectedInstance.get('/orders/all');
    },
    updateOrder: async (ordStatus, ordId) => {
        
        return await protectedInstance.put('/orders/update', {
            ordStatus, ordId
        });
    }
};

export { orderServices };