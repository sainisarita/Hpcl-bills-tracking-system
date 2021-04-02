const mongoose = require('mongoose');

const Upload_Po = mongoose.Schema({
    vendor_ref: {
        type : mongoose.Schema.ObjectId
    
    },
    promised_delivery_date : [
        {
            type : String
        }
    ],
    PO_line : [
        {
            type : String
        }
    ],
    Item_no :[
        {
            type : String
        }
    ],
    Item_description : [
        {
            type : String
        }
    ],
    Unit_measurement : [
        {
            type : String
        }
    ],
    Original_po_quantity : [
        {
            type : String
        }
    ],
    Open_po_quantity : [
        {
            type : String
        }
    ],
    Unit_rate : [
        {
            type : String
        }
    ],
    vendor_code: {
        type : String,
    },
    Details_po_Number: {
        type : String,
    },
    Ship_to_department: {
        type : String,
    },
    Name_of_Po: {
        type : String,
    }
    
})

module.exports = mongoose.model('upload_po', Upload_Po);