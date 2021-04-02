import React,{useState} from 'react'
import Axios from 'axios'
const UpDate_turn_over = () => {
  const [formData, setFormData] = useState({
    update_turn_over : ''
  })

  const [data, setData] = useState({
    status : ''
  })

  const {update_turn_over} = formData;

  const onChange = e => {
      setFormData({...formData, [e.target.name]: e.target.value})
  }


  const onSubmit = e => {
    console.log(formData)
    e.preventDefault()
    Axios.put(`http://localhost:5000/api/update_turn_over?id=${localStorage.getItem('id')}`, formData).then(function(response){
        setData({status: response.data.status});
        setFormData({update_turn_over : ''})
    }).catch(function(error){
      console.error(error.message)
    })
  }

  

    return (
        <div>
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Update Turn Over </h5>
    <form onSubmit={e =>onSubmit(e)}>
    <input type="text" name="update_turn_over" value={update_turn_over} onChange={e => onChange(e)}placeholder="Update Turn Over" required/>
    <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
    </form>
  </div>
</div>

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
    
      </div>
    </div>
  </div>
</div>
        </div>

        
    )
}

export default UpDate_turn_over
