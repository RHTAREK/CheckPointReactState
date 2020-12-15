
import './App.css';
import React, { Component } from 'react'
import File from './component/File'
class App extends Component {
  state ={isVisible : false }
 
   toggleVisibility= ()=> {
     this.setState({
       isVisible :!this.state.isVisible
     })
   }
   


  render() {  console.log("render()");
    return ( <div className="App">
      <button onClick={this.toggleVisibility}> {this.state.isVisible?('hide it' ):('Show it')}</button>
      {this.state.isVisible?<File/>
    :<h3>click on the button </h3>}
    
  </div> );
  }
}
 
export default App;
