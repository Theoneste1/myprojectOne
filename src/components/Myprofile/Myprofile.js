import React,{Component}from 'react'
import './Myprofile.css'

function Myprofile(props){
    return(
        <div>
            {/* person one */}
        <div className='profile'>
        <h3>This is is the profile of me:</h3>
        <h4>FirstName: {props.fname}</h4>
        <h4>LastName: {props.lname}</h4>
        </div>
{/* person second
        <div className='profile'>
        <h3>This is is the profile of me:</h3>
        <h4>FirstName: {props.fname}</h4>
        <h4>LastName: {props.lname}</h4>
        </div>
        <div className='profile'>
        <h3>This is is the profile of me:</h3>
        <h4>FirstName: {props.fname}</h4>
        <h4>LastName: {props.lname}</h4>
        </div> */}

        </div>
    );
}
export default Myprofile;