
const express = require('express')
const Vendor = require('../../../model/admin_model/new_vendor');

const router = express.Router();
router.post('/', async (req, res) => {
    const {vendor_id, forget_password} = req.body;
    try {

    
        let user = await Vendor.findOne({ vendor_id: vendor_id});
        if (!user) {
            return res
              .status(400)
              .json({ errors: [{ msg: 'Invalid' }] });
          }
        
        await Vendor.findById(user.id, (err, vendor) => {
            vendor.vendor_password = forget_password;
          
            vendor.save();
            const payload = {
                user: {
                  status: "Reset Password Successfully"
                }
              };
            res.json(payload);
    })
        


    }catch(err) {
       
        console.error(err.message)
    }
})

module.exports = router