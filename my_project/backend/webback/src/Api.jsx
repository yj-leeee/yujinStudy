import axios from "axios";

export const findAll = async () => {
    return axios.get("http://localhost:8080/todo/lists");
}

//할일 추가
export const createBtn = async (todo) => {
    return axios.post("http://localhost:8080/todo/create",{
        todo: todo
    });

}

//할일 삭제
export const deleteTodo = async (id) => {
    return axios.delete(`http://localhost:8080/todo/delete/${id}`);
}