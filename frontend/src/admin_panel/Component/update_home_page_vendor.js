import React from 'react'
import {Redirect} from 'react-router-dom'
import './style.css'
const Update_home_vendor = () => {
    const str = "hello"
    console.log(str.length)
    if(localStorage.getItem('token')){

    
    return (
       <h1>{str}</h1>
    )

    }else{
        <Redirect to="/"/>
    }
}

export default Update_home_vendor;