import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        return {data:[]}
    }
    if(action.type === 'SET_DATA'){
        return {...state, data:action.payload}
    }
    return state;
})