import React from 'react'
import {Link, Redirect} from 'react-router-dom'
const navbar = () => {

  const logout = () => {
    
    localStorage.removeItem('token')   
    localStorage.removeItem('id')   
    
  }
if(localStorage.getItem('token')){


return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">	
    <Link className="navbar-brand" to="/vendor_home">Vendor Panel</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">

      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>

      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Profile
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/myProfile">My Profile</Link></li>
            <li><Link className="dropdown-item" to="/update_email_phone">Update Email Phone</Link></li>
            <li><Link className="dropdown-item" to="/upDate_gstn">Update GSTN</Link></li>
            <li><Link className="dropdown-item" to="/upDate_turn_over">Update Turn Over</Link></li>

           
          </ul>
        </li>



        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            E-envoice
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/submit_envoice">Submit Envoice</Link></li>
            <li><Link className="dropdown-item" to="/edit_delete_envoice">Delete Envoice</Link></li>
            {/* <li><Link className="dropdown-item" to="/print_envoice">Print Envoice</Link></li>
            <li><Link className="dropdown-item" to="/create_credit_note">Create Credit Note</Link></li>
            <li><Link className="dropdown-item" to="/edit_delete_credit">Edit Delete Credit Note</Link></li> */}
           
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/view_po_detail">View PO Detail</Link>
        </li>


        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Reports
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/myBills">My Bills</Link></li>
            <li><Link className="dropdown-item" to="/status_of_invoices">Status Of Envoice</Link></li>
    
            <li><Link className="dropdown-item" to="/search_bill">Search Bill</Link></li>
          </ul>
        </li>

   

    
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/change_password">Change Password</Link>
        </li>
        {localStorage.getItem('token') ?  <li className="nav-item">
            <Link className="nav-link active" to="/" aria-current="page"  onClick={logout} >Logout</Link>
          </li> : null}
       
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
)
          }else{
            <Redirect to="/"/>
          }
}

export default navbar