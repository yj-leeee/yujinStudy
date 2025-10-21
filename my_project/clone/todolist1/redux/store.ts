import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer:{
        //todos 상태를 관리할 리듀서 등록
        todos:todoReducer,
    },
});
//앱 전역에서 사용할 RootState와 AppDispatch 타입 정의(타입스크립트 사용시)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;