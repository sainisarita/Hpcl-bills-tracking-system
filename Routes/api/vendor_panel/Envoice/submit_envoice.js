const express = require('express')
const router = express.Router();
const PO = require('../../../../model/admin_model/upload_po')
const Envoice = require('../../../../model/vendor_model/submit_envoice')

router.get('/', async (req, res) =>{
    PO.find({ vendor_ref: req.query.id}, function (err, docs) { 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            res.json(docs)
        } 
    });


})

router.post('/', async (req, res) =>{

    const {
        GST_registration_status,
        supply_state,
        invoice_number,
        invoice_date,
        net_texable_amount,
        Tax_amount,
        Gross_invoice_amount,
        number_of_page_uploaded,
        challan_number,
        remarks

    } = req.body;

    try {

        const Vendor_envoice = new Envoice({
            VENDOR_REF : req.query.id,
            BTS_SR_NO : (Math.floor(Math.random() * 10000000) + 10000000).toString().substring(1) ,
            GST_REGISTRATION_STATUS : GST_registration_status,
            SUPPLY_STATE : supply_state,
            INVOICE_NUMBER : invoice_number,
            INVOICE_DATE : invoice_date,
            NET_TEXABLE_AMOUNT : net_texable_amount,
            TAX_AMOUNT : Tax_amount,
            GROSS_INVOICE_AMOUNT : Gross_invoice_amount,
            NUMBER_OF_PAGE_UPLOADED : number_of_page_uploaded,
            CHALLAN_NUMBER : challan_number,
            Po_number : req.query.Po_number,
            MATERIAL_RECIEVED_LOCATION : req.query.material_recieved_location,         
            REMARKS : remarks
        })

        const post = await Vendor_envoice.save()
        res.json(post)

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router