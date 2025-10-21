import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//1. 상태 타입 정의
export interface Todo {
    id:number;
    text:string;
    completed : boolean;
}

//2. 초기상태정의

const initialState: Todo[] =[];

//3. ID 생성 변수 초기화
let nextId = 1;

//4. Slice 생성
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        //A.할일 추가 액션
        addTodo:(state, action: PayloadAction<string>)=>{
            state.push({
                id: nextId++, //새로운 ID 사용 후 증가
                text : action.payload,
                completed: false,
            });
        },
        //체크
        toggleTodo: (state, action:PayloadAction<number>)=>{
            const todo = state.find(t => t.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        //삭제
        deleteTodo: (state, action:PayloadAction<number>)=>{
            return state.filter(t=>t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;