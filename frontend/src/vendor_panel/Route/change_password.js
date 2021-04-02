import React from 'react'
import {Redirect} from 'react-router-dom'
const change_password = () => {
    if(localStorage.getItem('token')){

    
    return (
        <div>
            <h1>Change Password</h1>
        </div>
    )}else{
        <Redirect to="/"/>
    }
}

export default change_password
