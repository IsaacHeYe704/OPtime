import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/IsaacHeYe704/OPtime/main/src/Json/'
});

export default instance;