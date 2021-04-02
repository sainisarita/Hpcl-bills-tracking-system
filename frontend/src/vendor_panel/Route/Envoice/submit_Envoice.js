import React,{useState, useEffect}from 'react'
import Axios from 'axios'
import '../../../admin_panel/Component/style.css'
import {Redirect} from 'react-router-dom'

const Submit_Envoice = (props) => {

    const [data, newGet] =useState([])
    const [profile, newProfile] = useState([])
    const [formData, setFormData] = useState({
        GST_registration_status : '',
        supply_state : '',
        invoice_number : '',
        invoice_date : '',
        net_texable_amount : '',
        Tax_amount : '',
        Gross_invoice_amount : '',
        number_of_page_uploaded : '',
        challan_number : '',
        remarks : '',
        id : props.id
    })

    const {GST_registration_status, supply_state, invoice_number, invoice_date, net_texable_amount, Tax_amount, Gross_invoice_amount, number_of_page_uploaded, challan_number,  remarks} = formData


    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

     
      const onSubmit = e => {
          console.log(formData)
        e.preventDefault();
         Axios.post(`http://localhost:5000/api/submit_envoices?id=${localStorage.getItem('id')}&Po_number=${split[0]}&material_recieved_location=${split[1]}`, formData);

       
  
      }


    useEffect(() => {
      Axios.get('http://localhost:5000/api/submit_envoices',{
        params: {
          id : localStorage.getItem('id')
        }
      }
    
      ).then((response) =>{
          newGet(response.data)
      })
  }, [])

  useEffect(() => {
    Axios.get('http://localhost:5000/api/myProfile'
  
    ).then((response) =>{
        newProfile(response.data)
    })
}, [])

 
  const [value, newValue] = useState("");
  
   const split = value.split(' ');

if(localStorage.getItem('token')){


  
    return (
        <div>
       {value.length === 0 ?     <select className="form-control" onChange={(e)=>{
                const selectValue = e.target.value;
                newValue(selectValue)}}>
  <option selected>Open this select menu</option>
  {data.map((post) =>
        
         
        <option value={post.id}>  {post.Details_po_Number}{" "} {post.Ship_to_department} {" "}
        {post.Name_of_Po}</option>
    
    )}
</select>: <>

<section class="testimonial py-5" id="testimonial">
    <div>
        <div class="row ">
            <div class="col-md-4 py-5 bg-primary text-white text-center ">
                <div class=" ">
                    <div class="card-body">
                
                        <h2 class="py-3">Registration</h2>
                        <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.

</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Po Against {split[0]}</h4>
                <form onSubmit={e =>onSubmit(e)} >
                    <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="Full Name" name="GST_registration_status" value={GST_registration_status} required onChange={e => onChange(e)} placeholder="GST Registration Status" class="form-control" type="text"/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="text" name="supply_state" value={supply_state} onChange={e => onChange(e)} class="form-control" id="inputEmail4" placeholder="Supply State"/>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="invoice_number" name="invoice_number" value={invoice_number} onChange={e => onChange(e)} placeholder="INVOICE Number" class="form-control" type="number"/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="date" class="form-control" id="inputEmail4" name="invoice_date" value={invoice_date} onChange={e => onChange(e)} placeholder="Invoice_date"/>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="Full Name" name="net_texable_amount" value={net_texable_amount} onChange={e => onChange(e)} placeholder="Net Taxable Amount" class="form-control" type="number"/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="number" name="Tax_amount" value={Tax_amount} onChange={e => onChange(e)} class="form-control" id="inputEmail4" placeholder="Tax Amount"/>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="Full Name" name="Gross_invoice_amount" value={Gross_invoice_amount} onChange={e => onChange(e)} placeholder="Gross Invoice Amount" class="form-control" type="number"/>
                        </div>
                        <div class="form-group col-md-6">
                          <input type="number" name="number_of_page_uploaded" value={number_of_page_uploaded} onChange={e => onChange(e)} class="form-control" id="inputEmail4" placeholder="Number Of Page Uploaded"/>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <input id="Full Name" name="challan_number" value={challan_number} onChange={e => onChange(e)} placeholder="Challan Number" class="form-control" type="text"/>
                        </div>

                        <div class="form-group col-md-6">
                          <input id="Full Name" name=" material_recieved_location" value={split[1]} disabled  placeholder="Material recieved location" class="form-control" type="text"/>
                        
                        </div>
                     
                      </div>

                    <div class="form-row">
                       
                     
                        <div class="form-group col-md-12">
                                  <textarea type="text" id="comment" name="remarks" value={remarks} onChange={e => onChange(e)}cols="40" rows="5" class="form-control" placeholder="Remarks" ></textarea>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <div class="form-group">
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                  <label class="form-check-label" for="invalidCheck2">
                                    <small>“We declare that the invoice raised by us and submitted in Bill Tracking System is as per the rates given in the HPCL Purchase Order and for the actual quantity of supplies made/services rendered/works contract executed by us . We also declare that all the required documents as mentioned in the PO, measurement sheets, Third Party Inspection report etc. are also submitted to facilitate HPCL for processing of our invoice for payment”</small>
                                  </label>
                                </div>
                              </div>
                    
                          </div>
                    </div>

                    <div>
                        <table>
                            <tr>
                                <th>Vendor Code</th>
                                <th>Bank Name</th>
                                <th>Bank Account Number</th>
                                <th>IFSC CODE</th>
                            </tr>
                            <tr>
                                <td>{profile.vendor_id}</td>
                                <td>{profile.vendor_bank_name}</td>
                                <td>{profile.vendor_bank_ac}</td>
                                <td>{profile.vendor_bank_ifsc}</td>
                            </tr>
                        </table>
                    </div>
                    <br/>
                    <div class="form-row">
                        <button type="submit" class="btn btn-danger" onClick={onSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

</>
}
        </div>
    )
}else{
  <Redirect to="/"/>
}
}

export default Submit_Envoice
