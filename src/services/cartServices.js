import { protectedInstance } from "./instance"


const cartServices = {
    addCart: async (product) => {

        return await protectedInstance.post(`/cart/add`, {
            product
        });
    },

    getCart: async () => {

        return await protectedInstance.get('/cart/');
    },

    removeProduct: async (productId) => {

        return await protectedInstance.delete(`/cart/${productId}`);
    }
};

export { cartServices };