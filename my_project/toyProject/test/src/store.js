import { createStore } from 'redux';

function reducer(state, action){
    if(state === undefined){
        state = {
            userA : 0,
            userB : 0
        }
    }
    if(action.type === 'VOTE_A'){
        return{
            ...state,
            userA: state.userA + 1
        };
    }else if(action.type === 'VOTE_B'){
        return{
            ...state,
            userB: state.userB + 1
        };
    }
    return state;
}

const store = createStore(reducer);
export default store;