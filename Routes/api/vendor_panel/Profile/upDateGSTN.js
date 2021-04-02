const express = require('express')
const vendor = require('../../../../model/admin_model/new_vendor')

const router = express.Router();

router.put('/', async(req, res) => {
    try{

            await vendor.findById(req.query.id, (err, vendor) => {
                    vendor.GSTN = req.body.update_gstn;
                 
                    vendor.save();
                    const payload = {
                        status: 'Update GSTN Successfully'
                    }
                    res.json(payload)
            }).catch(err =>{
                const message = {
                    status: 'Update GSTN Failed'
                }
                res.json(message)
            })
        
           }catch(err){
                console.error(err)
           }

})


module.exports = router