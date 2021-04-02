import React from 'react'
import {Redirect} from 'react-router-dom'

import data from './data.json';
const Admin_Home = () => {
    // window.location.reload(); 
    //

 
    if(localStorage.getItem('token')){
        return (
           <>
           <div className=" text-center">
  <div className="card-header">
                INFORMATION
  </div>
  <div className=" text-left">
    <h7 className="card-title text-left">Dear Business Partner,</h7>
    {data.message.map((post) =>
         <p className="card-text">{post}</p>
      )}
   
 
  </div>
  <div className="card-footer">
    HINDUSTAN PETROLEUM CORPORATION LIMITED
  </div>
</div>

<div class=" text-center">
  <h5 class="card-header">CONTACT US</h5>
  <div class="card-body text-left">
    <h5 class="card-title">Contact Detail</h5>
    <p class="card-text">{data.contact}</p>
    <p class="card-text">{data.Grievance}</p>
  </div>
</div>
           </>
        )
    }else{
        return (
            <>
            <Redirect to="/"/>
            </>
        )
    }

   
}

export default Admin_Home