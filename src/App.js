import React,{Component}from 'react';
import './App.css';
import Myprofile from './components/Myprofile/Myprofile';


class App extends Component{
  
  render(){
    return (
      <div className="App"> 
       <Myprofile fname="Theoneste" lname="yyyy"/>
       <Myprofile fname="gggg" lname="zzzz"/>
       <Myprofile fname="ffff" lname="jjjjj"/>
      </div>
    );
  }
  }
  

export default App;
