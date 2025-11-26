import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from '../service/Api';

export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async () => {
    const res = await getAll();
    return res.data;
  }
);
