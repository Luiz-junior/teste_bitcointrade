import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dribbble.com/v2/',
});

// const fetchData = async () => {
//     try {
//         const response = await axios.
//     } catch (error) {

//     }
// }

export default api;