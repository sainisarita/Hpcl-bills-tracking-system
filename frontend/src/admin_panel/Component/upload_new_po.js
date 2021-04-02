/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './style.css'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), promised_delivery_date: '', po_line_number: '', Item_number: '', Item_description: '', Unit_of_measurement: '', Original_po_quantity: '', open_po_quantity: '', Unit_rate: '',code: 'one', Ship_to_department : '', Po_number: '', vendor_id: '',name_of_po: ''},
  ]);

 
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);

    Axios.post("http://localhost:5000/api/upload_po", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
    
      } 
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  promised_delivery_date: '', po_line_number: '', Item_number: '', Item_description: '', Unit_of_measurement: '', Original_po_quantity: '', open_po_quantity: '', Unit_rate: '' }])
  }
  
  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <Container className="conatainer">
      <h1>Upload Purchase Order</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
            
              name="promised_delivery_date"
              label="Promised_delivery_Date"
              variant="filled"
              value={inputField.promised_delivery_date}
              onChange={event => handleChangeInput(inputField.id, event)}
            />

            
            
            <TextField
      
              name="po_line_number"
              label="Po_line_number"
              variant="filled"
              value={inputField.po_line_number}
          
              onChange={event => handleChangeInput(inputField.id, event)}
            />

          <TextField
      
      name="Item_number"
      label="Item_number"
      variant="filled"
      value={inputField.Item_number}
      onChange={event => handleChangeInput(inputField.id, event)}
    />

              <TextField
              name="Item_description"
              label="Item Description"
              variant="filled"
              value={inputField.Item_description}
              onChange={event => handleChangeInput(inputField.id, event)}
            />

              <TextField
              name="Unit_of_measurement"
              label="Unit_of_measure"
              variant="filled"
              value={inputField.Unit_of_measurement}
              onChange={event => handleChangeInput(inputField.id, event)}
            />

              <TextField
              name="Original_po_quantity"
              label="Original_po_quantity"
              variant="filled"
              value={inputField.Original_po_quantity}
              onChange={event => handleChangeInput(inputField.id, event)}
            />

              <TextField
              name="open_po_quantity"
              label="Open_po_quantity"
              variant="filled"
              value={inputField.open_po_quantity}
              onChange={event => handleChangeInput(inputField.id, event)}
            />

              <TextField
            
              name="Unit_rate"
              label="Unit_rate"
              variant="filled"
              value={inputField.Unit_rate}
              onChange={event => handleChangeInput(inputField.id, event)}
            />



            
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }


            { inputFields.map(inputField =>(
             inputField.code === 'one' ?   <TextField           
             name="vendor_id"
             label="vendor_id"
             variant="filled"
             value={inputField.vendor_id}
             onChange={event => handleChangeInput(inputField.id, event)}
           />
           
           
           : console.log('hello')
          ))}


            { inputFields.map(inputField =>(
             inputField.code === 'one' ?   <TextField           
             name="Ship_to_department"
             label="Ship_to_department"
             variant="filled"
             value={inputField.Ship_to_department}
             onChange={event => handleChangeInput(inputField.id, event)}
           />
           
           
           : console.log('hello')
          ))}

            { inputFields.map(inputField =>(
             inputField.code === 'one' ?   <TextField           
             name="Po_number"
             label="Po_number"
             variant="filled"
             value={inputField.Po_number}
             onChange={event => handleChangeInput(inputField.id, event)}
           />
           
           
           : console.log('hello')
          ))}

          { inputFields.map(inputField =>(
             inputField.code === 'one' ?   <TextField           
             name="name_of_po"
             label="Po Name"
             variant="filled"
             value={inputField.name_of_po}
             onChange={event => handleChangeInput(inputField.id, event)}
           />
           
           
           : console.log('hello')
          ))}

        



        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
         
          onClick={handleSubmit}
        >Upload</Button>
      </form>

      
    </Container>
  );
}

export default App;
