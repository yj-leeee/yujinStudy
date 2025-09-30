// ✅ store.js
import { createStore } from 'redux';

// 1. 초기 상태 정의
const initialState = {
  username: ''
};

// 2. 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
}

// 3. store 생성
const store = createStore(reducer);
export default store;
