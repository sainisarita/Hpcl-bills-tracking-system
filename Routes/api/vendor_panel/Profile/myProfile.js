const express = require('express')
const vendor = require('../../../../model/admin_model/new_vendor')
const router = express.Router();
router.get('/', async(req, res) =>{

    const query =  await vendor.findOne({ 'vendor_id': '28024526' });
    res.json(query)

    
    // vendor.findById(req.query.id, function (err, data) {
    //     res.json(data);
        // console.log();
        
});



    


module.exports = router