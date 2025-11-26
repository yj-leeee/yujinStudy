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

//할일 수정
export const updateTodo = async (id, content) => {
    return axios.patch(`${BASE_URL}/update/${id}`, {
        content: content
    })
}

//할일 검색
export const findTodo = async (text) => {
    return axios.get(`${BASE_URL}/findTodo`, {
        params:{
            text:text
        }
    })
}