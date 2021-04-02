import React,{useState, useEffect}from 'react'
import Axios from 'axios'

const MyBills = () => {

    const [data, newGet] =useState([])

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
    

    return (
        <div>
            <table id="customers">
                <tr>
            
                    <th>BTS.Sr.No</th>
                    <th>Entered Date</th>
                    <th>Invoice No</th>
                    <th>Invoice Date</th>
                    <th>PO Number</th>
                    <th>Invoice Amount</th>
                    <th>Payment ID</th>
                    <th>Instrument No</th>
                    <th>Paid Date</th>
                    <th>Paid Amount</th>
                    <th>Hard Copy Status</th>
                    <th>Reciept No</th>
                    <th>Reciept Date</th>
                    <th>e-MRR Status</th>
                </tr>
                { data.map((post, id) =>
          <tr key={id}>
              <td>{post.BTS_SR_NO}</td>
              <td>{post.INVOICE_DATE}</td>
              <td>{post.INVOICE_NUMBER}</td>
              <td>{post.date}</td>
              <td>{post.Po_number}</td>
              <td>{post.TAX_AMOUNT}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
      )}
            </table>
        </div>
    )
}

export default MyBills
