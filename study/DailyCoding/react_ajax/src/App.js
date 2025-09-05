import React, {Component} from "react";

class Nav extends Component {
  state = {
    list:[]
  }
  componentDidMount(){
    fetch('list.json')
    .then(function(result){
      return result.json();
    })
    .then(function(json){
      console.log(json);
      this.setState({list:json});
    }.bind(this))
  }
  render(){
    var listTags = [];
    for(var i=0; i<this.state.list.length; i++){
      var li = this.state.list[i];
      listTags.push(<li key={li.id}><a href={li.id}>{li.title}</a></li>)
    }
    return(<nav>
        <ul>
          {listTags}
        </ul>
      </nav>)
  }
}
class Article extends Component{
  render(){
    return(
      <article>
        <h2>Welcome</h2>
        Hello, React & Ajax
      </article>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
