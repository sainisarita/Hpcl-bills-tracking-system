const mongoose = require('mongoose');

const New_venor_Profile = mongoose.Schema({
    vendor_id : {
        type: String
    },
    vendor_name : {
        type: String
    },
    vendor_password : {
        type: String
    },
    vendor_address : {
        type: String
    },
    pan_number : {
        type: String
    },
    vendor_email_payment : {
        type: String
    },
    vendor_email_tendor : {
        type: String
    },
    vendor_phone : {
        type: String
    },
    vendor_bank_name : {
        type: String
    },
    vendor_bank_ac : {
        type: String
    },
    vendor_bank_ifsc : {
        type: String
    
    },
    GSTN : {
        type: String
    },
    update_turn_over : {
        type: String
    }
})

module.exports = mongoose.model('new_venodor_registration', New_venor_Profile )