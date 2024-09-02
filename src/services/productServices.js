import { instance, protectedInstance } from "./instance";

const productServices = {

    addProduct: async (product, image) => {

        const formData = new FormData();
        formData.append('image', image);

        return await protectedInstance.post('/products/addproduct', product, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    viewProducts: async () => {

        return await instance.get('/products/viewproducts');
    },

    deleteProduct: async (id) => {

        return await protectedInstance.delete(`/products/${id}`);
    },

    editProduct: async (id, title, artist, description, price) => {

        return await protectedInstance.put(`/products/product`, {
            id, title, artist, description, price
        });
    }

};

export { productServices };