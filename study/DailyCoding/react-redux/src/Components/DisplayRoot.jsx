import React, {Component} from 'react';
import store from '../store';

export default class DisplayRoot extends Component{
    state = {number:store.getState().number}
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <h1>Display Number</h1>
            <input type="text" value={this.state.number} readOnly></input>
        </div>
        )
    }
}