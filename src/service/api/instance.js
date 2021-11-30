
import axios from 'axios';
// import { getItemFromStorage } from '../../Utils/Storage';
// import { ApiConfig } from '../../ApiConfig';
// import { configureUrl } from '../../Utils/Helper';


export const AXIOS_INSTANCE_SERVICE_WITHOUT_HEADERS = axios.create();


// AXIOS_INSTANCE_SERVICE_WITHOUT_HEADERS.interceptors.request.use(
//     async (config) => {
//         let request = config;
//         request.baseURL = ApiConfig.baseUrlService;
//         request.url = configureUrl(config.url);
//         return request;
//     },
//     (error) => error,
// );

