import { createStore } from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        state = {
            name:'',
            age:0,
            isLoggedIn : false
        }
    }
    if(action.type === 'LOGIN'){
        return{
            ...state,
            name : action.name,
            age : action.age,
            isLoggedIn : true
        };
    }else if(action.type === 'LOGOUT'){
        return{
            ...state,
            name : '',
            age: 0,
            isLoggedIn : false
        }
    }else if(action.type === 'INCREASE_AGE'){
        return{
            name : state.name,
            age : state.age + 1,
            isLoggedIn : true
        }
    }
    return state;
})