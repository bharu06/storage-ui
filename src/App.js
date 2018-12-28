import React, { Component} from "react";
import "./App.css";
import TreeComponent from './TreeComponent.js';

class App extends Component{
  render(){
    return(
      <div className="App">
        <TreeComponent />
      </div>
    );
  }
}

export default App;
