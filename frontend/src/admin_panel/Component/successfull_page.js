import React from 'react'
import {Redirect} from 'react-router-dom'
import logo from './img/check.png'
const successfullPage = (props) => {
    if(localStorage.getItem('token')){

    
    return (
        <>
        <div className="succesfull">
            <h2>{props.successfull}</h2> 
            <img src={logo} alt="logo" />
        </div>
        </>
    )
    }else{
        <Redirect to="/"/>
    }
}

export default successfullPage