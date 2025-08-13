import React, {Component} from 'react';

export default class DisplayRoot extends Component{
    render(){
        return(
        <div>
            <h1>Display Number</h1>
            <input type="text" value={this.state.number} readOnly></input>
        </div>
        )
    }
}