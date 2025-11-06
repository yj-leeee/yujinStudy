import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayValue: '', //전체 수식
    operator : null, //연산을 기다리는 연산자
    previousValue : null, //연산자의 첫번째 값
    cursorPosition:1, //TextInput 내 커서의 현재 위치
}
export const calculatorSlice = createSlice({
    name : 'calculator',
    initialState,
    reducers: {
        //1. 커서 위치 저장(InputComponent에서 사용)
        setCursorPosition: (state, action) => {
            state.cursorPosition = action.payload;
        },
        //2. 입력 내용 모두 초기화 (C버튼)
        clearAll: (state) => {
            return initialState;
        },
        //3. 커서 위치의 문자 삭제(Xbtn 컴포넌트)
        deleteInput: (state) => {
            const display = state.displayValue;
            const pos = state.cursorPosition;

            if(pos > 0){
                //커서 앞의 한 문자만 삭제
                state.displayValue = display.slice(0, pos -1) + display.slice(pos);
                state.cursorPosition = pos -1; //커서 위치도 한 칸 이동
            }
            //displayValue가 비었다면 '0'으로 만든다
            if(state.displayValue.length === 0){
                state.displayValue = '0';
                state.cursorPosition = 1;
            }
        },
    }
})