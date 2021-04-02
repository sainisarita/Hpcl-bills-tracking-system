const express = require('express');
const PO = require('../../../model/admin_model/upload_po')
const router = express.Router();

router.get('/', async(req, res) => {

    PO.findById(req.query.id, function (err, data) {
            res.json(data);
            // console.log();
            
    });
    
     

})

module.exports = router;
