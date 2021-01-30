import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-redux-b9354-default-rtdb.firebaseio.com/'
});

export default instance;