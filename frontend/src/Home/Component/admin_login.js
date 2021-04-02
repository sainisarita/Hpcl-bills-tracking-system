import React,{useState}from 'react'
import {Link, Redirect} from 'react-router-dom'
import App from '../../App'
import Axios from 'axios'
import './Login.css'
const Admin_logins = (props) => {
  const [status, new_status] = useState({
    status_form: ''
});
  const [forget_data, forget_new_data] = useState({
    vendor_id: '',
    forget_password: '',
    forget_confirm_password: ''
  })
  
  const {vendor_id, forget_password, forget_confirm_password} = forget_data;
 
  const Reset_clone = (e) => {
    forget_new_data({...forget_data,[e.target.name]: e.target.value })
  }

const Reset_password = (e) => {
  if(forget_password === forget_confirm_password){

    Axios.post("http://localhost:5000/api/vendor_reset_password", forget_data).then(function(response) {
      new_status({status_form : response.data.user.status})
       forget_new_data({vendor_id : '', forget_password : '', forget_confirm_password: ''}) 
       

   }).catch(function(error) {
      new_status({status_form : 'Wrong Vendor ID'})
      forget_new_data({vendor_id : '', forget_password : '', forget_confirm_password: ''})
      
       console.log(error.errors)

     
 
   });

  }else{
    new_status({status_form : 'Password Not Match'})
  }
  e.preventDefault()
  console.log(forget_data)
}

const forget_clear = () => {
  forget_new_data({
    vendor_id: '',
    forget_password: '',
    forget_confirm_password: ''
  })
  new_status({status_form : ''})

}

  
  
  const [formData, setFormData] = useState({
    name : '',
    email_1 : '',
    password_1 : '',
    confirm_password : '',
    area_location : ''
  })

  const [auth_data, new_auth_data] = useState({
    email : '',
    password : ''
  })

  
  const {email, password} = auth_data;
  const handle_auth = (e) => {
    
    new_auth_data({...auth_data,[e.target.name]: e.target.value })
  }
  const {email_1, password_1, confirm_password, area_location, name } = formData;
  const onChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value })
  }


  const submit_auth = (e) => {
    e.preventDefault()
    console.log(auth_data)
    if(props.logo === 'Vendor login'){

      Axios.post("http://localhost:5000/api/vendor_login", auth_data).then(function(response) {
       new_status({status_form : 'Login success'})
        new_auth_data({email : '', password : ''})
        
      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.payload.user.id);
      
        return <App name="Harkesh saini"/>
    }).catch(function(error) {
       new_status({status_form : 'Login Fail'})
        new_auth_data({email : '', password : ''})
        console.log(error.message)
        localStorage.removeItem('token')
      
  
    });

    }else{
      Axios.post("http://localhost:5000/api/admin_auth", auth_data).then(function(response) {
        new_status({status_form : 'Login success'})
        new_auth_data({email : '', password : ''})
        
        localStorage.setItem('token', response.data.token);
    }).catch(function(error) {
       new_status({status_form : 'Login Fail'})
       new_auth_data({email : '', password : ''})
        console.log(error.message)
       localStorage.removeItem('token')
  
    });
    }
   
  }
 
  const onSubmit = e => {
    
    e.preventDefault()
    console.log(formData)

      if(password_1 === confirm_password){
    
       Axios.post("http://localhost:5000/api/admin_register", formData).then(function(response) {
        new_status({status_form : 'Register success'})
        console.log(response)
        setFormData({
          name : '',
         email_1 : '',
         password_1 : '',
         confirm_password : '',
         area_location : ''
      })
    }).catch(function(error) {
       new_status({status_form : 'Registration Fail'})
        console.log(error.message)
    });
   

    }else{
       new_status({status_form : 'Password Not Match'})
        
    }

   
    

   
   

  }

  const clear_form = () => {
     setFormData({
         name : '',
        email_1 : '',
        password_1 : '',
        confirm_password : '',
        area_location : ''
     })

     new_status({status_form : ''})
  }
  

 if(localStorage.getItem('token')){
  if(props.logo === 'Vendor login'){
    return <Redirect to="/vendor_home"/>
  }else{
    return <Redirect to="/home_admin"/>
  }
  
   
   
 }


  const Refresh =() => {
    window.setTimeout(function () {
      window.location.reload();
    }, 1000);
    }

 
    return (
        <div id="login">
        
        <div class="container1">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" onSubmit={e => submit_auth(e)}>
                            <h3 class="text-center text-info">{props.logo === 'Vendor login' ? props.logo : 'Admin Login'}</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">{props.logo === 'Vendor login' ? props.label : 'Username'}</label><br/>
                                <input type="text" name="email" value={email} onChange={e => handle_auth(e)} id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input type="password" name="password" value={password} onChange={e => handle_auth(e)} id="auth_password" class="form-control"/>
                            </div>
                            <div class="form-group">
                               
                                {/* <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/> */}
                                <button type="submit" className="btn btn-dark"  data-bs-toggle="modal" data-bs-target="#authentication_status" >Login</button>
                            </div>
                            <div id="register-link" class="text-right">
                                <Link to="#" class="text-info" data-bs-toggle="modal" data-bs-target={props.logo === 'Vendor login' ? '#exampleModal_1' : '#exampleModal'} >{props.logo === 'Vendor login' ? 'Forget Password' : 'Register Admin'}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class={status.status_form === 'Register success' ? 'modal-title text-success' : status.status_form === 'Password Not Match' ? 'modal-title text-danger' : status.status_form === 'Registration Fail' ? 'modal-title text-danger': null } id="exampleModalLabel">{status.status_form === 'Register success' ? 'Registration Successfully' : status.status_form === 'Password Not Match' ? 'Password Does Not Match' : status.status_form === 'Registration Fail' ? 'Invalid Credential': 'Registration'}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={e =>onSubmit(e)}>
        <label for="fname">Name</label>
         <input type="text" name="name" value={name} onChange={e => onChange(e)} class="form-control"  placeholder="Enter Name"/>
         <label for="fname">Email</label>
         <input type="text" name="email_1" value={email_1} onChange={e => onChange(e)} class="form-control"  placeholder="Enter email"/> 
         <label for="fname">Area Location</label>
         <input type="text" name="area_location" value={area_location} onChange={e => onChange(e)} class="form-control"  placeholder="Area Location"/> 
         <label for="fname">Password</label>
         <input type="password" id="fname" value={password_1} onChange={e => onChange(e)} name="password_1"  placeholder="Password"/>

         <label for="fname">Confirm Password</label>
         <input type="password" id="fname" name="confirm_password" value={confirm_password} onChange={e => onChange(e)}  placeholder="Password" required/>

         <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={clear_form} data-bs-dismiss="modal" >Close</button>
        <button type="submit" class="btn btn-primary"  >Submit</button>
      </div>

        </form>
      </div>
      
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModal_1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class={status.status_form === 'Reset Password Successfully' ? 'modal-title text-success' : status.status_form === 'Wrong Vendor ID' ? 'modal-title text-danger' : status.status_form === 'Password Not Match' ? 'modal-title text-danger': null} id="exampleModalLabel">
{status.status_form === 'Reset Password Successfully' ? 'Reset Password Successfully' : status.status_form === 'Wrong Vendor ID' ? 'Wrong Vendor ID' : status.status_form === 'Password Not Match' ? 'Password Not Match': 'Forget Password'}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  onSubmit={e => Reset_password(e)}>
        <label for="fname">Vendor id</label>
         <input type="text" id="fname" value={vendor_id} name="vendor_id" onChange={e => Reset_clone(e)} placeholder="vendor id"/>
         <label for="fname">Password</label>
         <input type="password" id="fname" value={forget_password} name="forget_password" onChange={e => Reset_clone(e)}  placeholder="Password"/>

         <label for="fname">Confirm Password</label>
         <input type="password" id="fname" value={ forget_confirm_password} name="forget_confirm_password" onChange={e => Reset_clone(e)} placeholder="Password"/>

         <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={forget_clear} data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary"  >Save changes</button>
      </div>

        </form>
      </div>
     
    </div>
  </div>
</div>

<div class="modal fade" id="authentication_status" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Authentication Status</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3>{status.status_form}</h3>
      </div>
      <div class="modal-footer">
      
       {status.status_form === 'Login Fail' ?  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Close</button> :  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={Refresh}>Dashboard</button>}
      </div>
    </div>
  </div>
</div>

    </div>

    )
}

export default Admin_logins