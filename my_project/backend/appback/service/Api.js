import axios from 'axios';

const BASE_URL = "http://192.168.0.14:8080/todo";

export const getAll = async () => {
    return axios.get(`${BASE_URL}/lists`)
}