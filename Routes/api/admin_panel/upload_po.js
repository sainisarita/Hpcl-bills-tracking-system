const express = require('express')
const router = express.Router();
const VENDOR = require('../../../model/admin_model/new_vendor');
const UPLOAD_PO = require('../../../model/admin_model/upload_po')
const auth = require('../../../middleware/auth');
router.post('/',async (req, res) =>{

    
    const promised_delivery_date = req.body.map(detail => detail.promised_delivery_date);
    const po_line_number = req.body.map(detail => detail.po_line_number);
    const Item_number = req.body.map(detail => detail.Item_number);
    const Item_description = req.body.map(detail => detail.Item_description);
    const Unit_of_measurement = req.body.map(detail => detail.Unit_of_measurement);
    const Original_po_quantity = req.body.map(detail => detail.Original_po_quantity);
    const open_po_quantity = req.body.map(detail => detail.open_po_quantity);
    const Unit_rate = req.body.map(detail => detail.Unit_rate);
    const vendor_id = req.body.map(detail => detail.vendor_id);
    const Ship_to_department = req.body.map(detail => detail.Ship_to_department);
    const Po_number = req.body.map(detail => detail.Po_number);
    const Po_name = req.body.map(detail => detail.name_of_po);
    
    const user = await VENDOR.findOne({vendor_id : vendor_id[0]})


    try {

        const upload_po = new UPLOAD_PO({
            promised_delivery_date: promised_delivery_date ,
            PO_line : po_line_number,    
            Item_no : Item_number,
            Item_description : Item_description,
            Unit_measurement : Unit_of_measurement,
            Original_po_quantity : Original_po_quantity,
            Open_po_quantity : open_po_quantity,
            Unit_rate : Unit_rate,
            vendor_ref: user._id,
            vendor_code: vendor_id[0],
            Ship_to_department: Ship_to_department[0],
            Details_po_Number : Po_number[0],
            Name_of_Po : Po_name[0]
            
           
        })
        
        const post = await upload_po.save()
        res.json(post)
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }



});



//upload PO Tables


module.exports = router