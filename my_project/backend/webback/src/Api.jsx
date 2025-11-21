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

//할일 수정
export const updateTodo = async (id, todo) => {
    return axios.patch(`http://localhost:8080/todo/update/${id}`,{
        todo: todo
    })
}

//할일 검색
export const findTodo = async (text) => {
    return axios.get("http://localhost:8080/todo/findTodo", {
        params: {text: text}
    })
} 

//할일 체크
export const toggleTodo = async (id) => {
    return axios.patch(`http://localhost:8080/todo/toggle/${id}`);
};