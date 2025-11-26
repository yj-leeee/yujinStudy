import axios from 'axios';

const BASE_URL = "http://localhost:8080/todo";

export const getAll = async () => {
    return axios.get(`${BASE_URL}/lists`)
}

export const createTodo = async (todo) => {
    return axios.post(`${BASE_URL}/create`,{
        todo: todo
    });
}

//할일 삭제 
export const deleteTodoApi = async (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`)
};