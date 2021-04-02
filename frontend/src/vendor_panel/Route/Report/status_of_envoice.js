import React,{useState, useEffect} from 'react'
import './status_of_invoice.css'
import Axios from 'axios'
const Status_of_envoice = () => {
 const [status_bill, set_status] =useState({
   status : ''
 })
console.log(localStorage.getItem('id'))
 const [data, newGet] =useState([])
 
 useEffect(() => {
   Axios.get('http://localhost:5000/api/edit_delete_envoices',{
     params: {
       id : localStorage.getItem('id')
     }
   }
 
   ).then((response) =>{
       newGet(response.data)
   }).catch((error) =>{
     console.log(error.message)
   })
}, [])

  const handleClick = (e) => {
  
      set_status({status : e})
  }
  console.log(status_bill.status)
    return (
        <div>
            <div>
  
  <div class="row justify-content-end">
    <div class="col-4">
    <div class="form-check">
    <button type="button" onClick={() =>handleClick('')} class="btn btn-dark">Reieved CPC</button>
</div>
    </div>
    <div class="col-4">
    <div class="form-check">
    <button type="button" onClick={() =>handleClick('Awaited')}class="btn btn-dark">Awaited CPC</button>
</div>
    </div>
  </div>
 

 
</div>    
<br />
<table class="customers">
<tr>
        <th>BTS.Sr No</th>
        <th>PO Number</th>
        <th>Challan Number</th>
        <th>Invoice Number</th>
        <th>Invoice Date</th>
        <th>Material Recieved Location</th>
        <th>Entered Date</th>
        <th>Invoice Amount</th>
        {status_bill.status !== 'Awaited' ? <th>Paid Date</th>: null}
    </tr>

    {status_bill.status === 'Awaited' ?  data.map((post, id) =>
          <tr key={id}>
              <td>{post.BTS_SR_NO}</td>
              <td>{post.Po_number}</td>
              <td>{post.CHALLAN_NUMBER}</td>
              <td>{post.INVOICE_NUMBER}</td>
              <td>{post.date}</td>
              <td>{post.MATERIAL_RECIEVED_LOCATION}</td>
              <td>{post.INVOICE_DATE}</td>
              <td>{post.TAX_AMOUNT}</td>
            
              



 
            

                       
          </tr>
      ) :    data.map((post, id) =>
          <tr key={id}>
              <td>{post.BTS_SR_NO}</td>
              <td>{post.Po_number}</td>
              <td>{post.CHALLAN_NUMBER}</td>
              <td>{post.INVOICE_NUMBER}</td>
              <td>{post.date}</td>
              <td>{post.MATERIAL_RECIEVED_LOCATION}</td>
              <td>{post.INVOICE_DATE}</td>
              <td>{post.TAX_AMOUNT}</td>
              <td></td>
              



 
            

                       
          </tr>
      )}
</table>


        </div>

    
    )
}

export default Status_of_envoice
