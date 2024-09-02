import { instance, protectedInstance } from "./instance";


const userServices = {

    register: async (name, email, password, address, phone) => {

        return await instance.post("/users/register", {
            name, email, password, address, phone
        });

    },
    
    login: async (email, password) => {

        return await instance.post("/users/login", {
            email, password
        }, {
            withCredentials: true
        });
    },
    logout : async () => {
    
        return await protectedInstance.post('/users/logout', undefined, {
            withCredentials: true
        });
    },
    checkAuth: async () => {

        return await protectedInstance.get('/users/checkAuth');
    },
    getUsers: async () => {

        return await protectedInstance.get('/users/allusers');
    },
    deleteUsers: async (id) => {

        return await protectedInstance.delete(`/users/${id}`);
    },
    getProfile: async () => {

        return await protectedInstance.get('/users/profile');
    },
    editProfile: async (name, email, address, phone) => {

        return await protectedInstance.put('/users/profile', {
            name, email, address, phone
        });
    }

};

export { userServices };