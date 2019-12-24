import React,{Component}from 'react';
import './App.css';
// import Myprofile from './components/Myprofile/Myprofile';
import Login from './components/login/Login';
import Myfunction from './components/Myfunction/Myfuction';
import ChangingState from './components/ChangingState/ChangingState';

class App extends Component{
  
  render(){
    return (
      <div className="App"> 
       {/* <Myprofile fname="Theoneste" lname="yyyy"/> */}
       {/* <Myprofile fname="gggg" lname="zzzz"/>
       <Myprofile fname="ffff" lname="jjjjj"/> */}
        <Login fname='Theoneste' lname='hhhh'/>
        <Myfunction/>
        <ChangingState/>
        


      </div>
    );
  }
  }
  

export default App;
