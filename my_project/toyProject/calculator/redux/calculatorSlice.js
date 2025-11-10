import { createSlice } from '@reduxjs/toolkit';

let nextId = 2; //계산기 ID를 자동 증가시키기 위한 전역변수
const initialState = {
  calculators: [
    { id: 1, displayValue: '', result: 0, cursorPos: 0},
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
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(!calc){
                return;
            }
            const input = action.payload;
            if(calc.displayValue === ''){
                calc.displayValue = input === '.' ? '0.' : input;
            }else{
                calc.displayValue += input;
            }
        },
        //2. displayValue 바뀔대마다 계산
        calculateResult: (state) => {
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(!calc){
                return;
            }

            try {
                const expr = calc.displayValue
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
                    calc.result = result;
                }
            } catch(e) {
                //계산 불가능시 result 유지
            }
        },
        //3. Xbtn 누르면 한글자씩 삭제
        deleteBtn: (state) => {
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(!calc){
                return;
            }
            const { displayValue , cursorPos } = calc;

            if(cursorPos === 0){ //커서가 맨 앞이면 삭제 불가
                return;
            }
            //커서 앞 한 글자 제거
            calc.displayValue = 
                displayValue.slice(0, cursorPos - 1) + displayValue.slice(cursorPos);

            //커서 위치 1칸 앞으로 이동
            calc.cursorPos = cursorPos - 1;

            //결과 리셋
            if(calc.displayValue.length === 0){
                calc.result = 0;
            }
        },
        //4. C 버튼을 눌렀을때 식 전체 삭제
        clearAll: (state) => {
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(calc){
                calc.displayValue = '';
                calc.result = 0;
            }
            
        },

        //5. 괄호 버튼
        handleBracket : (state) => {
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(!calc) {
                return;
            }
            const display = calc.displayValue;
            //괄호 개수 세기
            const openCount = (display.match(/\(/g) || []).length;
            const closeCount = (display.match(/\)/g) || []).length;

            //마지막 문자 가져오기
            const lastChar = display.slice(-1);

            //닫는 괄호가 필요한 상황인지 판단
            const needClose = openCount > closeCount && /[\d)]$/.test(lastChar);

            //추가할 괄호 결정
            const newBracket = needClose ? ')' : '(';

            calc.displayValue += newBracket;
        },

        //6. = 버튼 눌렀을때
        resultPress : (state) => {
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(calc){
                calc.displayValue = String(calc.result);
            }
        },

        //7. 새 계산기 생성
        addCalculator : (state) => {
          const newCalc = { id: nextId++, displayValue: '', result : 0};
          state.calculators.push(newCalc);
          state.activeId = newCalc.id;
        },
        //8. 계산기 전환
        switchCalculator : (state, action)=>{
          state.activeId = action.payload;
        },
        //9. 계산기 삭제
        deleteCalculator : (state)=>{
            //현재 활성 계산기 ID
            const idToDelete = state.activeId;
            //전체 계산기 목록
            const calculators = state.calculators;
            
            //계산기 1개만 남았으면 삭제 방지
            if(calculators.length === 1){
                return;
            }
            //현재 계산기의 인덱스 찾기
            const index = calculators.findIndex(c => c.id = idToDelete);
            if(index === -1) return;

            //삭제 수행
            calculators.splice(index,1);
            //다음 활성 계산기 정하기
            //바로 이전 탭이 있으면 그걸 선택, 없으면 첫번째로 이동
            if(index > 0){
                state.activeId = calculators[index -1].id;
            }else { 
                state.activeId = calculators[0].id;
            }
        },
        //10. 커서 위치 저장 리듀서
        setCursorPosition : (state, action) => {
            const calc = state.calculators.find(c => c.id === state.activeId);
            if(calc){
                calc.cursorPos = action.payload;
            }
        },
       
    }
})
export const { setCursorPosition,deleteCalculator ,addCalculator,switchCalculator,handleBracket, resultPress ,setDisplayValue, calculateResult, deleteBtn, clearAll } = calculatorSlice.actions;
 
export default calculatorSlice.reducer;