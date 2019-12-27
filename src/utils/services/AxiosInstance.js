import Axios from 'axios';
const AxiosInstance = Axios.create({
    //timeout: 10000,
    baseURL: process.env.REACT_APP_BASE_URL_API
});
export default AxiosInstance;
