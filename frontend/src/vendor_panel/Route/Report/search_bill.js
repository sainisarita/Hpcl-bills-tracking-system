import React,{useState} from 'react'
import Axios from 'axios'
import './status_of_invoice.css'
const Search_bill = () => {
const [formData, setFormData] = useState({
  update_turn_over : ''
})

const [data, setData] = useState({
  Po_number : '',
  invoice_amount : '',
  invoice_number : '',
  invoice_date : '',
  material : ''

})

const {update_turn_over} = formData;
const onChange = e => {
  setFormData({...formData, [e.target.name]: e.target.value})
}
const onSubmit = e => {
  console.log(formData)
e.preventDefault();
 Axios.post("http://localhost:5000/api/search_bill", formData).then(function(response) {
   setData({
     Po_number : response.data.Po_number,
     invoice_amount : response.data.NET_TEXABLE_AMOUNT,
     invoice_number : response.data.INVOICE_NUMBER,
      invoice_date : response.data.INVOICE_DATE,
      material : response.data.MATERIAL_RECIEVED_LOCATION



   })

 }).catch(function(error) {
   console.log(error)
 });




}
    return (
        <div>
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Find bill with BTS serial number</h5>
    <form onSubmit={e =>onSubmit(e)} >
    <input type="text" name="update_turn_over" value={update_turn_over} onChange={e => onChange(e)}placeholder="Enter BTS Serial Number"/>
    <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Find</button>
    </form>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detail Of Envoice</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <label for="exampleInputEmail1" class="form-label">PO Number</label>
      <input type="text" class="form-control" value={data.Po_number} id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
      <label for="exampleInputEmail1" class="form-label">Invoice Amount</label>
      <input type="text" class="form-control" value={data.invoice_amount} id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
      <label for="exampleInputEmail1" class="form-label">Invoice Number</label>
      <input type="text" class="form-control" value={data.invoice_number} id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
      <label for="exampleInputEmail1" class="form-label">Envoice Date</label>
      <input type="text" class="form-control" value={data.invoice_date} id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
      <label for="exampleInputEmail1" class="form-label">Material Recieved Location</label>
      <input type="text" class="form-control" value={data.material} id="exampleInputEmail1" aria-describedby="emailHelp" disabled/>
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Search_bill
