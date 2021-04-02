const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const Post = require('../../../model/admin_model/new_vendor')
router.post('/', async (req, res) => {
  
   const {
        vendor_id,
          vendor_name,
          vendor_password,
          vendor_address,
          pan_number,
        vendor_email_payment,
        vendor_email_tendor,
        vendor_phone,
        vendor_bank_name,
        vendor_bank_ac, 
        vendor_bank_ifsc,
    } = req.body;

    try {
        const new_vendor_registration = new Post({
        vendor_id : vendor_id,
        vendor_name : vendor_name,
        vendor_password : vendor_password,
        vendor_address : vendor_address,
        pan_number : pan_number,
        vendor_email_payment : vendor_email_payment,
        vendor_email_tendor : vendor_email_tendor,
        vendor_phone : vendor_phone,
        vendor_bank_name : vendor_bank_name,
        vendor_bank_ac : vendor_bank_ac,
        vendor_bank_ifsc : vendor_bank_ifsc
        })

        const post = await new_vendor_registration.save()
        res.json(post)
    }catch(err) {
        console.error(err.message);
      res.status(500).send('Server Error');
    }

});

module.exports = router;