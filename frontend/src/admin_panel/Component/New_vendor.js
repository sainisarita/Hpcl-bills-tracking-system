import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import './new_vendor.css'

const New_vendor = () => {
  const [formData, setFormData] = useState({
    vendor_id : '',
    vendor_name : '',
    vendor_address : '',
    pan_number : '',
  vendor_email_payment : '',
  vendor_email_tendor : '',
  vendor_phone : '',
  vendor_bank_name : '',
  vendor_bank_ac : '',
  vendor_bank_ifsc : '',
  vendor_password : ''
    })

    const {vendor_id, vendor_name, vendor_address, pan_number, vendor_email_payment, vendor_email_tendor, vendor_phone, vendor_bank_name, vendor_bank_ac, vendor_bank_ifsc, vendor_password} = formData;
    const onChange = e => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const [status, new_status] = useState({
      status_form: ''
  });
    const onSubmit = e => {
      console.log(e);
      Axios.post("http://localhost:5000/api/new_vendor", formData).then(function(response) {
        new_status({status_form : 'Register success'})
        setFormData({
          vendor_id : '',
      vendor_name : '',
      vendor_address : '',
      pan_number : '',
    vendor_email_payment : '',
    vendor_email_tendor : '',
    vendor_phone : '',
    vendor_bank_name : '',
    vendor_bank_ac : '',
    vendor_bank_ifsc : ''
        })
      
    }).catch(function(error) {
       new_status({status_form : 'Registration Fail'})
      

        console.log(error.message)
    });

    }

    

    if(localStorage.getItem('token')){

    
  return (
    <>
   <form className="container" onSubmit={e =>onSubmit(e)}>
    <label for="fname">Vendor id</label>
    <input type="text" id="fname" name="vendor_id" value={vendor_id} onChange={e => onChange(e)} placeholder="vendor id"/>

    <label for="lname">Vendor Name</label>
    <input type="text" id="lname" name="vendor_name" value={vendor_name} onChange={e => onChange(e)}placeholder="vendor name"/>

    <label for="lname">Password</label>
    <input type="password" id="lname" name="vendor_password" value={vendor_password} onChange={e => onChange(e)} placeholder="vendor password"/>


    <label for="lname"> Address</label>
    <input type="text" id="lname" name="vendor_address" value={vendor_address} onChange={e => onChange(e)}placeholder="vendor address"/>

    <label for="lname">PAN Number</label>
    <input type="text" id="lname" name="pan_number" value={pan_number} onChange={e => onChange(e)}placeholder="PAN number"/>

    <label for="lname"> Email Payment</label> 
    <input type="text" id="lname" name="vendor_email_payment" value={vendor_email_payment} onChange={e => onChange(e)}placeholder="Vendor Email Payment.."/>

    <label for="lname"> Email Tendor</label>
    <input type="text" id="lname" name="vendor_email_tendor" value={vendor_email_tendor} onChange={e => onChange(e)}placeholder="Vendor Email tendor.."/>

    <label for="lname">Vendor Phone</label>
    <input type="text" id="lname" name="vendor_phone" value={vendor_phone} onChange={e => onChange(e)}placeholder="Phone Number.."/>

    <label for="lname">Bank Name</label>
    <input type="text" id="lname" name="vendor_bank_name" value={vendor_bank_name} onChange={e => onChange(e)}placeholder="vendor bank name"/>

    <label for="lname">Bank Account Number</label>
    <input type="text" id="lname" name="vendor_bank_ac" value={vendor_bank_ac} onChange={e => onChange(e)}placeholder="Bank Account Number.."/>

    <label for="lname">Bank IFSC Code</label>
    <input type="text" id="lname" name="vendor_bank_ifsc" value={vendor_bank_ifsc} onChange={e => onChange(e)}placeholder="Bank IFSC Code.."/>

    
    <button type="submit" className="btn btn-dark"  >Submit</button>
  </form>

    </>
  )
    }else{
        <Redirect to="/"/>
    }
}

export default New_vendor