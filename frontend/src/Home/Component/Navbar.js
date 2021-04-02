import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = (props) => {

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('token')   
    
  }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Hpcl Bills Tracking</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
      {
         props.nav1[0].id === 'Home_navbar' ? props.nav1.map(nav =>{
            return <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={nav.url}>{nav.text}</Link>
          </li>
        }) : props.nav1.map(admins =>{
            return <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={admins.url}>{admins.text}</Link>
          </li>
        })
      }

         {localStorage.getItem('token') ?  <li className="nav-item">
            <Link className="nav-link active" to="/" aria-current="page"  onClick={logout} >Logout</Link>
          </li> : null}
      

{/* 
         {props.admin.map(admins =>{
            return <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={admins.url}>{admins.text}</Link>
          </li>
        })} */}

      </ul>
    
    </div>
  </div>
</nav>


        </>
    )
}

export default Navbar;
