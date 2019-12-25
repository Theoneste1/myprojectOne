import React from 'react';

//  const Person=(props)=>
 function Person(props) 
{
    return(
        <div>
            {/* passing the method reference */}
            {/* we use onclick but to the oject that 
            we added insome */}
            {/*  */}
            {/* this click object that  I am using 
            are declared within where
            I am calling the person function */}

<p onClick={props.click}>I am  <b>{props.name}</b>   and I am  <b>{props.age}</b></p> 
   {/* This would be useful to dispaly a part of hobbies */}
    <p>{props.children}</p> 
            </div>
    )
}
// onClick={props.click} is referencing the clik object I added
// in Display information and it is support to change 
//evenwhen we click on text.
export default Person