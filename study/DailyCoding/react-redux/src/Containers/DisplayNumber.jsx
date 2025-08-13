import store from "../store";
import React, { Component } from "react";
import DisplayRoot from "../Components/DisplayRoot";

export default class extends Component{
    state = {number:store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this))
    }
    render(){
        return <DisplayRoot></DisplayRoot>
    }
}