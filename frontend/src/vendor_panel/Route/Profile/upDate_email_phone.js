import React,{useState} from 'react'
import '../../../admin_panel/Component/style.css'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
const UpDate_email_phone = () => {
  const [data, setData] = useState({
    state: ''
  })
    const [formData, setFormData] = useState({
        phone_number: '' ,
        email_tendor: '',
        email_payment: ''

    })

    const {phone_number, email_tendor, email_payment} = formData;
    console.log(formData)
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }
      const onSubmit = e => {
        console.log(e);
        e.preventDefault()
        Axios.put(`http://localhost:5000/api/upDate_email_phone?id=${localStorage.getItem('id')}`, formData).then(function(response){
          setData({status: response.data.status})
          setFormData({
            phone_number: '' ,
            email_tendor: '',
            email_payment: ''
          })
        }).catch(function(error){
          console.log(error.message)
        });
       
  
      }

      if(localStorage.getItem('token')){

      

    return (
        <div className="container">
             <form onSubmit={e =>onSubmit(e)}>
    <label for="fname">Phone Number</label>
    <input type="text" id="fname" name="phone_number" placeholder="Phone Number.." value={phone_number} onChange={e => onChange(e)} />

    <label for="lname">Email Tendor</label>
    <input type="text" id="lname" name="email_tendor" placeholder="Email Tendor.." value={email_tendor} onChange={e => onChange(e)} />

    <label for="lname">Email Payment</label>
    <input type="text" id="lname" name="email_payment" placeholder="Email Payment.." value={email_payment} onChange={e => onChange(e)} />
    
  
    <button type="submit" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick='refresh'>Update</button>
  </form>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Updation Status</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3>{data.status}</h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        </div>
    )
      }else{
        <Redirect to="/"/>
      }
}

export default UpDate_email_phone
