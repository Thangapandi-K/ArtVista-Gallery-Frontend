import { userServices } from "../services/userServices"

const userLoaders = {

    checkAuth: async () => {

        try {
            await userServices.checkAuth();
            return true;
        } catch (error) {
            return false;
        }
    },
    getProfile: async () => {

        try {
            const user = await userServices.getProfile();
            return user;
        } catch (error) {
            return error;
        }
    },
    getUsers: async () => {

        try {
            const users = await userServices.getUsers();
            return users;
        } catch (error) {
            return error;
        }
    }
};

export default userLoaders;