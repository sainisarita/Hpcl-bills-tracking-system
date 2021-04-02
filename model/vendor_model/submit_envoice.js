const mongoose = require('mongoose');

const Submit_Envoice = mongoose.Schema({
    VENDOR_REF : {
        type : mongoose.Schema.ObjectId
    },
    BTS_SR_NO : {
        type : Number
    },
    GST_REGISTRATION_STATUS : {
        type : String
    },
    SUPPLY_STATE : {
        type : String
    },
    INVOICE_NUMBER : {
        type : Number
    },
    INVOICE_DATE : {
        type : Date
    },
    NET_TEXABLE_AMOUNT : {
        type : Number
    },
    TAX_AMOUNT : {
        type : Number
    },
    GROSS_INVOICE_AMOUNT : {
        type : Number
    },
    NUMBER_OF_PAGE_UPLOADED : {
        type : Number
    },
    CHALLAN_NUMBER : {
        type : String
    },
    REMARKS: {
        type : String
    },
    date : {
        type : Date,
        default : Date.now
    },
    Po_number : {
        type : String
    },
    MATERIAL_RECIEVED_LOCATION : {
        type : String
    },
    PAYMENT_ID : {
        type : Number
    },
    PAYMENT_DATE : {
        type : Date
    },
    PAID_AMOUNT : {
        type : Number
    },
    HARD_COPY_STATUS : {
        type : String
    },
    RECIEPT_NUMBER : {
        type: Number
    },
    EMRR_STATUS : {
        type : String
    }
})

module.exports = mongoose.model('submit_envoice', Submit_Envoice)