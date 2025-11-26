import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodoDone, fetchTodos, searchTodo, updateDone } from './todoThunk';

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
        //deleteTodo todo목록에서 제거
        .addCase(deleteTodoDone.fulfilled, (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        })
        //update 할일 수정
        .addCase(updateDone.fulfilled, (state, action) => {
            const updated = action.payload;
            const idx = state.todos.findIndex(t => t.id === updated.id);
            if(idx !== -1){
                state.todos[idx] = updated;
            }
        })
        //할일 검색
        .addCase(searchTodo.fulfilled, (state, action) => {
            state.todos = action.payload; //검색결과로 교체            
        })
    },
});

export default todoSlice.reducer;