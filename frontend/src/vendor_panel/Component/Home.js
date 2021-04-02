import React from 'react'
import {Redirect} from 'react-router-dom'
const Home = () => {
  if(localStorage.getItem('token')){

  
    return (
        <div>
          <h1>Vendor Home</h1>  
        </div>
    )
  }else{
    <Redirect to="/"/>
  }
}

export default Home
