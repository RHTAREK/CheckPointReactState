import React, { Component } from 'react'
import logo from '../logo.svg';
class File extends Component {
  constructor()
  { console.log("constructor()");super()
  this.state = {timer:0,interval:null }
  this.state.person =[
    
    'fullName : Tarek Rhouma',
    'bio : Something ',
    'imgSrc:', logo,
    'profession: work '
   ];}

   
   componentDidMount() {
   
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  } componentDidUpdate() {
   
    
  }componentWillUnmount() {
 
    clearInterval(this.state.intervall);
  }


  render() {  
    return ( <div className="AppF">
    
      <ul className= 'theList'>
      {this.state.person.map((person,i)=>(<li key={i}>{person}</li>))}
    </ul>
    <h3>{this.state.timer}</h3>
  </div> );
 
  }
}
 
export default File;
