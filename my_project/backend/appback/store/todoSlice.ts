import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todoThunk';

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        })
    },
});

export default todoSlice.reducer;