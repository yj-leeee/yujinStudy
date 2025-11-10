import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calculators: [
    { id: 1, displayValue: '', result: 0 },
  ],
  activeId : 1,
};

export const calculatorSlice = createSlice({
    name : 'calculator',
    initialState,
    reducers: {
      //0. 현재 활성화된 계산기 찾기 (공통 로직)
      _getActiveCalc : (state) => {
        return state.calculators.find(c=> c.id === state.activeId);
      },

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
                // ✅ 괄호 짝이 안 맞으면 계산 중단
                const openCount = (expr.match(/\(/g) || []).length;
                const closeCount = (expr.match(/\)/g) || []).length;
                if (openCount !== closeCount) return;

                //마지막 문자가 숫자나 괄호면 계산 가능
                if(/[\d)]$/.test(expr)){
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
        },

        //5. 괄호 버튼
        handleBracket : (state) => {
            const display = state.displayValue;

            //괄호 개수 세기
            const openCount = (display.match(/\(/g) || []).length;
            const closeCount = (display.match(/\)/g) || []).length;

            //마지막 문자 가져오기
            const lastChar = display.slice(-1);

            //닫는 괄호가 필요한 상황인지 판단
            const needClose = openCount > closeCount && /[\d)]$/.test(lastChar);

            //추가할 괄호 결정
            const newBracket = needClose ? ')' : '(';

            state.displayValue += newBracket;
        },

        //6. = 버튼 눌렀을때
        resultPress : (state) => {
            const result = state.result;
            state.displayValue = String(result);
        },

        //7. 새 계산기 생성
        addCalculator : (state) => {
          const newCalc = { id: state.id++, displayValue: '', result : 0};
          state.calculators.push(newCalc);
          state.activeId = newCalc.id;
        },
        //8. 계산기 전환
        switchCalculator : (state, action)=>{
          state.activeId = action.payload;
        }

       
    }
})
export const { addCalculator,switchCalculator,handleBracket, resultPress ,setDisplayValue, calculateResult, deleteBtn, clearAll } = calculatorSlice.actions;
 
export default calculatorSlice.reducer;