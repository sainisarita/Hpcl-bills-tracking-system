import React,{useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'
import './style.css'
function Update_po_tables (props)  {
  const [get, newGet] =useState([])


  useEffect(() => {
    Axios.get('http://localhost:5000/api/get_po',{
      params: {
        id : props.location.state
      }
    }
  
    ).then((response) =>{
        newGet(response.data)
    })
}, [props.location.state])

const item = get.Item_description +" ";

const original_po = get.Original_po_quantity +" ";
const open_po = get.Open_po_quantity +" ";

const unit_of_measurement = get.Unit_measurement + " ";
const unit_rate = get.Unit_rate +" ";
// setInputFields([...inputFields, { id: uuidv4(),  Open_po_quantity: '' }])

if(localStorage.getItem('token')){



return (
  <>
  <div id="customers">
  
    <div class="row">
  
    
    <div class="col">
      <h3>Item Description</h3><br />
      {item.split( ',' ).map( ( item, i ) => <>
     <input type="text" name="Original_po_quantity" value={item}  />   </>)}
      
    </div>


    <div class="col">
      <h3>Unit Of Measurement</h3><br />
      {unit_of_measurement.split( ',' ).map( ( item, i ) => <>
     <input type="text" name="Original_po_quantity" value={item}  />   </>)}
      
    </div>

    <div class="col">
      <h3>Original Po Quantity</h3><br />
      {original_po.split( ',' ).map( ( item, i ) => <>
     <input type="text" name="Original_po_quantity" value={item}  />   </>)}
      
    </div>
    

  
    

    <div class="col ">
      <h3>Open Po Quantity</h3><br />
      {open_po.split( ',' ).map( ( item ) => <>    <input type="text" name="Original_po_quantity" value={item}  />    </>)}
    </div>

    <div class="col order-last">
      <h3>Unit Rate</h3><br />
      {unit_rate.split( ',' ).map( ( item, i ) => <>
     <input type="text" value={item}  />   </>)}
      
    </div>
  </div>
  
  
  
</div>

 
  </>
)
}else{
  <Redirect to="/"/>
}



}




export default Update_po_tables