import { cartServices } from "../services/cartServices";

const cartLoaders = {
    getCart: async () => {
        try {
            
            const carts = await cartServices.getCart();

            return carts;

        } catch (error) {
            return error;
        }
    }
}
//export
export default cartLoaders;