
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://optime-react2021-default-rtdb.firebaseio.com/'
});

export default instance;