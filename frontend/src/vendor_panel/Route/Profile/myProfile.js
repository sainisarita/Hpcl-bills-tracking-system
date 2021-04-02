import React,{useState, useEffect} from 'react'
import '../../../admin_panel/Component/style.css'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'

const MProfile = () => {

  const [data, newGet] =useState([])


  useEffect(() => {
    Axios.get('http://localhost:5000/api/myProfile',{
      params: {
        id : localStorage.getItem('id')
      }
    }
  
    ).then((response) =>{
        newGet(response.data)
    })
}, [])
console.log(data)
if(localStorage.getItem('token')){


    return (
        <div>
          
            <table id="customers">
            <tr>
    <th>Vendor ID</th>
    <th>Vendor Name</th>
    <th>Vendor Address</th>
  </tr>

  <tr>
    <td>{data.vendor_id}</td>
    <td>{data.vendor_name}</td>
    <td>{data.vendor_address}</td>
  </tr>
            </table>
<br/>

            <table id="customers">
            <tr>
    <th>PAN Number</th>
    <th>Email Address Payment</th>
    <th>Email Address Tendor</th>
    <th>Phone Number</th>
  </tr>

  <tr>
    <td>{data.pan_number}</td>
    <td>{data.vendor_email_payment}</td>
    <td>{data.vendor_email_tendor}</td>
    <td>{data.vendor_phone}</td>
  </tr>
            </table>

            <br/>

            <table id="customers">
            <tr>
    <th>Bank Name</th>
    <th>Bank Account Number</th>
    <th>IFSC CODE</th>

  </tr>

  <tr>
    <td>{data.vendor_bank_name}</td>
    <td>{data.vendor_bank_ac}</td>
    <td>{data.vendor_bank_ifsc}</td>
    
  </tr>
            </table>

        </div>
    )}else{
      <Redirect to="/"/>
    }
}

export default MProfile
