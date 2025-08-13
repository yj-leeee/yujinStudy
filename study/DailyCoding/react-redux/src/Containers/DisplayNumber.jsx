import DisplayRoot from "../Components/DisplayRoot";
import {connect} from 'react-redux';


// import store from "../store";
// import React, { Component } from "react";

// export default class extends Component{
//     state = {number:store.getState().number}
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this))
//     }
//     render(){
//         return <DisplayRoot number={this.state.number} unit={this.props.unit}></DisplayRoot>
//     }
// }