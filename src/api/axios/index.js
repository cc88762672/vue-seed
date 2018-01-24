import axios from 'axios';
import { preRequest, requestError, postResponse, responseError } from './interceptors';
import { get, post } from './methods';

// axios defaults configs
axios.defaults.baseURL = $config.baseURL;
axios.defaults.timeout = 10000;

// axios interceptors configs
axios.interceptors.request.use(preRequest, requestError);
axios.interceptors.response.use(postResponse, responseError);

export default { get, post };
