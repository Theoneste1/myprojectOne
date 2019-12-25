import React,{ Component } from 'react'
import Person from './Person';
import App from '../App'

class DisplayInfo extends Component {
    state={
        persons: [
            {name:'Max', age:'28'},
            {name :'Manu', age:'29'},
            {name:'Stephanie', age:'31'}
                    ]
    }

    // change the state method
    handlechangeName=()=>{
        this.setState({
    
          persons: [
            {name:'Maximumum', age:'28'},
            {name :'Manu', age:'29'},
            {name:'Theoneste', age:'31'}
                    ]
                  })
      
      }

      // return to the previous changes

      keepChangePreviousName=()=>{
        this.setState({
    
          persons: [
             {name:'Max', age:'28'},
          {name :'Manu', age:'29'},
          {name:'Stephanie', age:'31'}
                    ]
                  })
        console.log("return state is clicked"); 
      }
      render(){
    return(
        <div>
        <Person name={this.state.persons[0].name}  age={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name}  age={this.state.persons[1].age}>
          My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}/>

        <button onClick={this.handlechangeName}>ChangeNames</button><br></br>
        <button onClick={this.keepChangePreviousName}>Goback</button>
        </div>
    );
    
}
}

export default DisplayInfo
