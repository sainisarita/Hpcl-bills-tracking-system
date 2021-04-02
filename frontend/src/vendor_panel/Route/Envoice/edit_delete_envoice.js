import React,{useState, useEffect}from 'react'
import '../../../admin_panel/Component/style.css'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'

const Edit_delete_envoice = () => {
  const [data, newGet] =useState([])
  const [envoice, newEnvoice] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:5000/api/edit_delete_envoices',{
      params: {
        id : localStorage.getItem('id')
      }
    }
  
    ).then((response) =>{
        newGet(response.data)
    })
}, [])


const handleClick = (e,E1, E2, E3) => {
 
 let envoice_detail = [];
 envoice_detail.push(e,E1,E2,E3)
 newEnvoice(envoice_detail)
  
}


    const delete_envoice = (del_id) => {
      console.log(del_id)
        Axios.delete(`http://localhost:5000/api/edit_delete_envoices?id=${del_id}`)
    }

if(localStorage.getItem('token')){


  return (
    <div>
      <table id="customers">
        <tr>
          <th>BTS Sr Number</th>
          <th>Purchase Order Number</th>
          <th>Challan Number</th>
          <th>Invoice Number</th>
          <th>Invoice Date</th>
          <th>Material Recieved Location</th>
          <th>Invoice Amount</th>
          <th>Entered Date</th>
      
          <th>Delete Envoice</th>
         
        </tr>

        { data.map((post, id) =>
          <tr key={id}>
              <td>{post.BTS_SR_NO}</td>
              <td>{post.Po_number}</td>
              <td>{post.CHALLAN_NUMBER}</td>
              <td>{post.INVOICE_NUMBER}</td>
              <td>{post.date}</td>
              <td>{post.MATERIAL_RECIEVED_LOCATION}</td>
              <td>{post.TAX_AMOUNT}</td>
              <td>{post.INVOICE_DATE}</td>

              <td><button className="btn" data-bs-toggle="modal" onClick={() => handleClick(post._id, post.BTS_SR_NO, post.INVOICE_NUMBER, post.TAX_AMOUNT)} data-bs-target="#exampleModal"  ><i className="fa fa-trash"></i></button></td>
              
          </tr>
      )}
      </table>


      
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirm Deleted</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form>
       <label for="fname">BTS SR NUMBER</label>
    <input type="text" id="fname" name="vendor_id"  value={envoice[1]} disabled />

    <label for="fname">ENVOICE NUMBER</label>
    <input type="text" id="fname" name="vendor_id"  value={envoice[2]} disabled />

    <label for="fname">INVOICE AMOUNT</label>
    <input type="text" id="fname" name="vendor_id"  value={envoice[3]} disabled />

       </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => delete_envoice(envoice[0])} >Delete Envoice</button>
      </div>
    </div>
  </div>
</div>
          

    </div>


  )}
  else {
      <Redirect to="/"/>
  }

}

export default Edit_delete_envoice
