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
    handlechangeName=(newName, age, newName2, age2,)=>{
        this.setState({
    
          persons: [
            {name: newName, age: age},
            {name :newName2, age:age2},
            {name:'Theoneste', age:'31'}
                    ]
                  })
      
      }


      // An other ways of changing the component values but entered from keyboard

      handleNameChangeFnByEvent=(event)=>{
        this.setState({
    
          persons: [
            {name: 'Max', age: '23'},
            {name :event.target.value, age:'34'},
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
        <Person name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         click={this.handlechangeName} 
         />

        <Person name ={this.state.persons[1].name}  
        age={this.state.persons[1].age}
        clicked={this.handlechangeName}  //this is the ways of adding an object that would be taken into pron fn
        changed={this.handleNameChangeFnByEvent} // this is an object that would support us in entering the names we want
        >
          My hobbies: Racing
           
        </Person>

        <Person name={this.state.persons[2].name} 
         age={this.state.persons[2].age}
         click={this.handlechangeName} 
         />

        <button onClick={this.handlechangeName.bind(this, 'Theodomir',12,'Kagano',23)}>ChangeNames</button><br></br>
        <button onClick={this.keepChangePreviousName}>Goback</button>
        </div>
    );
    
}
}

// click={this.handlechangeName} this thing is declared
// and it is supporting that if we click on even the text
//we would be able to change the names as we said.

export default DisplayInfo
