import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dribbble.com/v2/',
});

export default api;