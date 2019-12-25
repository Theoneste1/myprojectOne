import React,{Component}from 'react';
import DisplayInfo from './components/DisplayInfo';
import './App.css';
// import Myprofile from './components/Myprofile/Myprofile';
// import Login from './components/login/Login';
// import Myfunction from './components/Myfunction/Myfuction';
// import ChangingState from './components/ChangingState/ChangingState';
import Person from './components/Person';

class App extends Component{
  
  render(){
    return (
      <div className="App"> 
      <h2>History, I'm a React App</h2>
      <p>This is really working!</p>
      <DisplayInfo/>
        
          </div>
    );
  }
  }
  

export default App;
