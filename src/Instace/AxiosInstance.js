import axios from 'axios'

const instance = axios.create({
    baseURL: '<../Json/Task>'
});

export default instance;