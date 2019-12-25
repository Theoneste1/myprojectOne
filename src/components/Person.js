import React from 'react';

//  const Person=(props)=>
 function Person(props) 
{
    return(
        <div>
<p>I am  <b>{props.name}</b>   and I am  <b>{props.age}</b></p> 
   {/* This would be useful to dispaly a part of hobbies */}
    <p>{props.children}</p> 
            </div>
    )
}
export default Person