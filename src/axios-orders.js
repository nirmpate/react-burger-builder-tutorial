import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f3ec5.firebaseio.com/'
});

export default instance;