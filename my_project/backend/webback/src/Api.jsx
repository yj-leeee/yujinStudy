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