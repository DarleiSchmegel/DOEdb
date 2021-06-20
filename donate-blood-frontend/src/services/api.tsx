// import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:3333"
// });


import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// ...
        const config: AxiosRequestConfig = {
            baseURL: "http://localhost:3333",
        };
        const api: AxiosInstance = axios.create(config);
// ...
export  {api};