import axios from "axios";
import { BPORT } from "./Port";

const baseURL = `${BPORT}/api/v1`;

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

export { instance, protectedInstance };