import Axios from "axios";

const AxiosClient = Axios.create({
    baseURL: 'http://localhost:4000/'
});

export default AxiosClient;
