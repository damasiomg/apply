import axios from 'axios';

export const jobApi = axios.create({
    baseURL: 'http://localhost:8080/',
});