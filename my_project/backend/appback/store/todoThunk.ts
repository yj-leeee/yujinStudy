import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTodo, getAll } from '../service/Api';

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