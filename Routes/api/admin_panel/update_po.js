const express = require('express')
const PO = require('../../../model/admin_model/upload_po')
const router = express.Router();

router.get('/', function(req, res, next){
    PO.find({},['vendor_code','Ship_to_department','Details_po_Number','_id'],function(err, data){
    res.json(data);
  });
});

module.exports = router