import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayValue: '', //전체 수식
    
}
export const calculatorSlice = createSlice({
    name : 'calculator',
    initialState,
    reducers: {
        //1. 버튼 입력한거 문자열로 받기
        setDisplayValue : (state, action) =>{
            const input = action.payload; //버튼에서 넘어온 문자열
            let display = state.displayValue;
            if(display === ''){
                if(input === '.'){
                    state.displayValue = '0.';
                }else{
                    state.displayValue = input;
                }
            }
            //'0'이 아니거나 이미 입력중이면 문자열 이어 붙이기
            else {
                state.displayValue = display + input;
            }
        }

       
    }
})
export const { setDisplayValue } = calculatorSlice.actions;

export default calculatorSlice.reducer;