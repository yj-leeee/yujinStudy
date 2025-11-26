import axios from 'axios';

const BASE_URL = "http://localhost:8080/todo";

export const getAll = async () => {
    return axios.get(`${BASE_URL}/lists`)
}