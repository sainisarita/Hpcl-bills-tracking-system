import React,{useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
// import Update_po from './update_po_tables'
import Axios from 'axios'
import './update_po.css'
const Update_po = () => {
    
    const [data, setData] =useState([])
   
    
    useEffect(() => {
        Axios.get('http://localhost:5000/api/update_po').then((response) =>{
            setData(response.data)
        })
    }, [])


    
if(localStorage.getItem('token')){



    return (
       
<table id="customers">
  <tr>
    <th>Vendor Code</th>
    <th>Details PO Number</th>
    <th>Ship To Department</th>
    <th>Update PO</th>
  </tr>
  
  {data.map((val, i) => {
        return <><tr><td>{val.vendor_code}</td> <td>{val.Details_po_Number}</td> <td>{val.Ship_to_department}</td>  <td><Link className="btn btn-primary"to={{ 
            pathname: "/update_po_tables", 
            state: val._id
           }}>
            Detail
           </Link></td> </tr>
           
           
           </>
    })}
    

  
</table>
    )

}else{
    <Redirect to="/"/>
}
}

export default Update_po;