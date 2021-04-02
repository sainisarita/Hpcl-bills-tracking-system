/* eslint-disable react/jsx-pascal-case */

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Navbar from '../src/Home/Component/Navbar'
import Admin_login from '../src/Home/Component/admin_login'
import React, {Fragment} from 'react'
import vendor_login from '../src/Home/Component/vendor_login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../src/Home/Component/Home'
import New_vendor from '../src/admin_panel/Component/New_vendor'
import Admin_home from '../src/admin_panel/Component/admin_home_page'
import Payment_process from '../src/admin_panel/Component/payment_process'
import Update_po from '../src/admin_panel/Component/update_po'
import Upload_PO from '../src/admin_panel/Component/upload_new_po'
import Update_home_vendor from '../src/admin_panel/Component/update_home_page_vendor'
import Update_po_tables from './admin_panel/Component/po_detail'
import Navbar_2 from '../src/vendor_panel/Component/navbar'
import vendor_home from '../src/vendor_panel/Component/Home'

import Submit_Envoice from '../src/vendor_panel/Route/Envoice/submit_Envoice'
// import Print_envoice from '../src/vendor_panel/Route/Envoice/print_envoice'
import Edit_delete from '../src/vendor_panel/Route/Envoice/edit_delete_envoice'
// import Edit_delete_credit from '../src/vendor_panel/Route/Envoice/edit_delete_credit'
// import Create_credit_note from '../src/vendor_panel/Route/Envoice/create_credit_note'
import MyProfile from '../src/vendor_panel/Route/Profile/myProfile'
import Update_email_phone from '../src/vendor_panel/Route/Profile/upDate_email_phone'
import UpDate_gstn from '../src/vendor_panel/Route/Profile/upDate_gstn'
import Update_turn_over from '../src/vendor_panel/Route/Profile/upDate_turn_over'
import MyBills from '../src/vendor_panel/Route/Report/myBills'
import Search_bill from '../src/vendor_panel/Route/Report/search_bill'
import Status_of_envoice from '../src/vendor_panel/Route/Report/status_of_envoice'
import Change_password from '../src/vendor_panel/Route/change_password'
import Po_detail from '../src/vendor_panel/Route/view_po_details'



const  App = () => {


   
    


  

  const Home_navbar = [
    {id: 'Home_navbar'},
    {url: '/home', text: 'Home'},
    {url: '/admin_login', text: 'Admin login'},
    {url: '/vendor_login', text: 'Vendor login'}
    ]

    const Admin_navbar = [
      {id: 'Admin_navbar'},
      {url: '/home_admin', text: 'Home'},
      {url: '/new_vendor', text: 'New vendor'},
      {url: '/payment_process', text: 'Payment process'},
      {url: '/update_po', text: 'Po Detail'},
      {url: '/upload_po', text: 'Upload PO'},
      {url: '/update_home', text: 'Update Home'}
    ]


  return (
    
    <Router>
         {/* // <Navbar Home="Home" Admin_login="Admin_login" Vendor_login="Vendor_login"/> */}
         <Route exact  path={["/admin_login", "/vendor_login", "/"]} render={() =>
  <Fragment>
     <Navbar nav1={Home_navbar}/>
      
     <Home/>
  </Fragment>

  

} />








 <Switch>
   {/* <Navbar nav1={Home_navbar}/> */}
   <Route exact path={["/home_admin", "/new_vendor", "/payment_process", "/update_po", "/upload_po", "/update_home", "/upload_po_tables", "/successfully_submission", "/update_po_tables"]} render={() =>
  <Fragment>
     <Navbar nav1={Admin_navbar} />
               
  </Fragment>

} />
        <Route exact path="/admin_login" component={Admin_login} />
        
        <Route exact path="/vendor_login" component={vendor_login} />
      </Switch>



      <Route exact  path={["/vendor_home", "/view_po_detail", "/change_password", "/myBills", "/search_bill", "/status_of_invoices", "/myProfile",  "/update_email_phone","/upDate_gstn","/update_turn_over", "/submit_envoice", "/print_envoice","/edit_delete_envoice","/edit_delete_credit","/create_credit_note","/vendor_home","/vendor_logout"]} render={() =>
  <Fragment>
     <Navbar_2 />
     
  </Fragment>

  

} />


<Switch>




<Route exact path="/home_admin" component={Admin_home} />
<Route exact path="/payment_process" component={Payment_process} />
<Route exact path="/update_po" component={Update_po} />
<Route exact path="/new_vendor" component={New_vendor} />
<Route exact path="/update_home" component={Update_home_vendor} />
<Route exact path="/upload_po" component={Upload_PO} />
<Route exact path="/update_po_tables" component={Update_po_tables} />
{/* <Route exact path="/vendor_nav" component={Navbar_2} />  */}
<Route exact path="/submit_envoice"  component={Submit_Envoice} />
{/* <Route exact path="/print_envoice" render={() => <Print_envoice id={data._id} />} /> */}
<Route exact path="/edit_delete_envoice" component={Edit_delete} />
{/* <Route exact path="/edit_delete_credit" render={() => <Edit_delete_credit id={data._id} />} /> */}
{/* <Route exact path="/create_credit_note" render={() => <Create_credit_note id={data._id} />} /> */}
<Route exact path="/myProfile"  component={MyProfile} />
<Route exact path="/update_email_phone" component={Update_email_phone } />





<Route exact path="/upDate_gstn" component={UpDate_gstn}  />
<Route exact path="/update_turn_over" component={Update_turn_over} />
<Route exact path="/myBills"  component={MyBills}/>
<Route exact path="/search_bill" component={ Search_bill } />
<Route exact path="/change_password"  component={Change_password} />
<Route exact path="/status_of_invoices"  component={Status_of_envoice} />
<Route exact path="/view_po_detail"  component={Po_detail} />





<Route exact path="/vendor_home" component={vendor_home} />



</Switch>
     
    </Router>
    
    
  )
 
}

export default App;
