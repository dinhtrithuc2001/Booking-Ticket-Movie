import axios from "axios";
import { DOMAIN_BE, TOKEN } from "./constant";
import { getLocalStorage } from "./config";

export const http = axios.create({  
    baseURL: DOMAIN_BE,
    timeout: 6000
})


http.interceptors.request.use(config => {

    const token = getLocalStorage('USER')

    return {
        ...config,
        headers: {
            // ...config.headers,
            Authorization: `${token ? `Bearer ${token.accessToken}` : ''}`,
            tokenCyberSoft: TOKEN
        }
    }
})