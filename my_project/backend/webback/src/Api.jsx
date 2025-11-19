import axios from "axios";

export const findAll = async () => {
    return axios.get("http://localhost:8080/todo/lists");
}