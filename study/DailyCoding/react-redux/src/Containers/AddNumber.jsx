import React, { Component } from "react";
import AddNumber from "../Components/AddNumber";
import store from "../store";

export default class extends Component{
    render(){
        return <AddNumber onClick={function(){

        }.bind(this)}></AddNumber>
    }
}