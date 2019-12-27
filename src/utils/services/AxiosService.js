import AxiosInstance from './AxiosInstance';
const AxiosService = {
    getCirclesUsers: () => AxiosInstance.get(process.env.REACT_APP_CIRCLES_USERS_ENDPOINT, { crossdomain: true }),
    getCircles: () => AxiosInstance.get(process.env.REACT_APP_CIRCLES_ENDPOINT, { crossdomain: true }),
    getUsers: () => AxiosInstance.get(process.env.REACT_APP_USERS_ENDPOINT, { crossdomain: true })
}
export default AxiosService;