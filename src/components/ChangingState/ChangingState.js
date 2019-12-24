import React,{Component} from 'react';

class ChangingState extends Component
{
    // using of constructor 
    constructor(props)
    {
    super(props); // super should be there
    this.state={
        color:"red",
        name:"Tax",
        year:2019
    };
}

    changingColor = () =>
    {
      this.setState(
          { 
            color:"green",
            name: "Suzuki"
    });
}
    render(){
        return(

           <div>
    <p>My car was {this.state.name} changed into {this.changingColor}<br></br> 
    {this.state.color} changed into {this.changingColor} thanks. </p>

           <div> 
               <button type="button" onClick={this.changingColor}>
                   Change the state
               </button>
           </div>

           </div>
        );
   
    }
}

export default ChangingState
