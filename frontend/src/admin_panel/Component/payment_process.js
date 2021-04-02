import React,{useState, useEffect}from 'react'
import {Redirect} from 'react-router-dom'
import Axios from 'axios'
import './style.css'
const Payment_process = () => {
    const [id, set_id] = useState({
        state: ''
    })

    

    const clicked_id = e => {
        set_id({state: e})
      
    }
    
    const [formData, setFormData] = useState({
        payment_id: '',
        payment_date : '',
        paid_amount : '',
        hard_copy_status : '',
        reciept_number : '',
        emrr_status : ''
    })

    const {payment_id, payment_date, paid_amount,hard_copy_status, reciept_number, emrr_status} = formData
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }
      const onSubmit = e => {
          Axios.put(`http://localhost:5000/api/payment_process?id=${id.state}`,formData).then(function (response) {
              set_id({state: response.data.status});
              setFormData({
                payment_id: '',
                payment_date : '',
                paid_amount : '',
                hard_copy_status : '',
                reciept_number : '',
                emrr_status : ''
              })
          }).catch(err => {
              console.error(err.message)
          })
          e.preventDefault();
          console.log(formData)
      }
      console.log(id.state)

    const [get, newGet] =useState([])


    useEffect(() => {
      Axios.get('http://localhost:5000/api/get_invoice',
    
    
      ).then((response) =>{
          
          newGet(response.data)
          console.log(response.data[0]._id)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  
  

    if(localStorage.getItem('token')){

    
    return (
       <>
       <table class="table">
  <thead>
    <tr>
    
      <th scope="col">BTS. Sr No</th>
      <th scope="col">Invoice Number</th>
      <th scope="col">Invoice Date</th>
      <th scope="col">Po Number</th>
      <th scope="col">Update</th>
    
    </tr>
  </thead>
  <tbody>

  {get.map((post, id) =>
       <tr key={id}>

       <td>{post.BTS_SR_NO}</td>
       <td>{post.INVOICE_NUMBER}</td>
       <td>{post.INVOICE_DATE}</td>
       <td>{post.Po_number}</td>
       <td><button type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => clicked_id(post._id)} class="btn btn-success">Update</button></td>
     </tr>
      )}
    
    
    
  </tbody>
</table>

<div class="modal fade  bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{id.status === 'Updation Successfully' ? id.status : 'Payment Process'}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form onSubmit={e =>onSubmit(e)} >
  <div class="form-group">
    <label for="payment">Payment id</label>
    <input type="number" class="form-control" name="payment_id" id="payment"value={payment_id} onChange={e => onChange(e)}  placeholder="Payment ID"/>
  </div>

  <div class="form-group">
    <label for="payment_date">Payment Date</label>
    <input type="date" class="form-control" name="payment_date" value={payment_date} onChange={e => onChange(e)} placeholder="Payment Date"/>
  </div>

  <div class="form-group">
    <label for="paid_amount">Paid Amount</label>
    <input type="number" class="form-control" name="paid_amount" value={paid_amount} onChange={e => onChange(e)}  placeholder="Paid Amount"/>
  </div>
  <div class="form-group">
    <label for="hard_copy_status">Hard Copy Status</label>
    <input type="text" class="form-control" name="hard_copy_status" value={hard_copy_status} onChange={e => onChange(e)} placeholder="Hard Copy Status"/>
  </div>

  <div class="form-group">
    <label for="Reciept">Reciept Number</label>
    <input type="number" class="form-control" name="reciept_number" value={reciept_number} onChange={e => onChange(e)}  placeholder="Reciept Number"/>
  </div>
  <div class="form-group">
    <label for="Reciept">E-mrr Status</label>
    <input type="text" class="form-control" name="emrr_status" value={emrr_status} onChange={e => onChange(e)} placeholder="E-mrr Status"/>
  </div>
  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
  
</form>
      </div>
      
    </div>
  </div>
</div>
       </>
    )
    }else{
        <Redirect to="/"/>
    }
}

export default Payment_process;