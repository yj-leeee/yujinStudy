import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTodo, deleteTodoApi, getAll } from '../service/Api';

export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async () => {
    const res = await getAll();
    return res.data;
  }
);

//할 일 추가하기
export const addTodo = createAsyncThunk(
  "todos/add",
  async (todo) => {
    const res = await createTodo(todo);
    return res.data;
  }
)

//할일 삭제하기
export const deleteTodoDone = createAsyncThunk(
  "todos/delete",
  async (id) => {
    await deleteTodoApi(id);
    return id; //slice에서 어떤 id를 지울지 알아야 함
  }
)