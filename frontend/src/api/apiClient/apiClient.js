import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://itransition-task-4-hgpi.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;