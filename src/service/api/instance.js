
import axios from 'axios';
// import { getItemFromStorage } from '../../Utils/Storage';
// import { ApiConfig } from '../../ApiConfig';
import { API_baseUrl } from '../config';


export const AXIOS_INSTANCE_SERVICE_WITHOUT_HEADERS = axios.create();


AXIOS_INSTANCE_SERVICE_WITHOUT_HEADERS.interceptors.request.use(
    async (config) => {
        let request = config;
        request.baseURL = API_baseUrl
        // request.url = configureUrl(config.url);
        return request;
    },
    (error) => error,
);




  