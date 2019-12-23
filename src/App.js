import React,{Component}from 'react';
import './App.css';
// import Myprofile from './components/Myprofile/Myprofile';
import Login from './components/login/Login';

class App extends Component{
  
  render(){
    return (
      <div className="App"> 
       {/* <Myprofile fname="Theoneste" lname="yyyy"/> */}
       {/* <Myprofile fname="gggg" lname="zzzz"/>
       <Myprofile fname="ffff" lname="jjjjj"/> */}
        <Login fname='Theoneste' lname='hhhh'/>
        


      </div>
    );
  }
  }
  

export default App;
