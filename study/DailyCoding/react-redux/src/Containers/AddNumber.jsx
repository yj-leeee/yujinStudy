import AddNumber from "../Components/AddNumber";
import { connect } from "react-redux";

export default connect()(AddNumber);
// import store from "../store";
// import React, { Component } from "react";

// export default class extends Component{
//     render(){
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size:size})
//         }.bind(this)}></AddNumber>
//     }
// }