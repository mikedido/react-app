import AxiosInstance from './AxiosInstance';
const AxiosService = {
    getJokes: () => AxiosInstance.get('https://api.icndb.com/jokes/random')
}
export default AxiosService;