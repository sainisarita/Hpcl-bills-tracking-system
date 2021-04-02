const express = require('express');
const router = express.Router();
const vendor = require('../../../../model/admin_model/new_vendor')

router.put('/', async(req, res) => {
        try{

                await vendor.findById(req.query.id, (err, vendor) => {
                        vendor.vendor_phone = req.body.phone_number;
                        vendor.vendor_email_payment = req.body.email_payment;
                        vendor.vendor_email_tendor = req.body.email_tendor
                        vendor.save();
                        const payload = {
                                status: "Update Successfully"
                        }
                        res.json(payload)
                })
            
               }catch(err){
                    console.error(err)

                    const payload = {
                        status: "Update Failed"
                }
                res.json(payload)
               }
   
})

module.exports = router