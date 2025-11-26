import { createSlice } from '@reduxjs/toolkit';
import { addTodo, fetchTodos } from './todoThunk';

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        //fetch 호출
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
        //createTodo 완료 -> 새로운 todo 목록에 추가
        .addCase(addTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })
    },
});

export default todoSlice.reducer;