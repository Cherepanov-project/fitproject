import axios from "axios";
import Cookie from 'js-cookie';

const axiosInctance = axios.create({
    baseURL: 'https://api.realworld.io/api/',
});

axiosInctance.interceptors.request.use(
    (config) => {
        const authTocen = Cookie.get('auth-token');

        if (authTocen) {
            config.headers.authorization = `Token ${authTocen}`
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInctance;