import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayValue: '', //전체 수식
    result:0, //결과값
    
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
        },
        //2. displayValue 바뀔대마다 계산
        calculateResult: (state) => {
            try {
                const expr = state.displayValue
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');
                if(expr === ''){
                    state.result = 0;
                    return;
                }
                //마지막 문자가 숫자나 괄호면 계산 가능
                if(/[\d]$/.test(expr)){
                    const result = new Function(`return ${expr}`)();
                    state.result = result;
                }
            } catch(e) {
                //계산 불가능시 result 유지
            }
        },
        //3. Xbtn 누르면 한글자씩 삭제
        deleteBtn: (state) => {
            let display = state.displayValue;
            state.displayValue = display.slice(0,-1);

        },
        //4. C 버튼을 눌렀을때 식 전체 삭제
        clearAll: (state) => {
            state.displayValue = '';
        }

       
    }
})
export const { setDisplayValue, calculateResult, deleteBtn, clearAll } = calculatorSlice.actions;

export default calculatorSlice.reducer;