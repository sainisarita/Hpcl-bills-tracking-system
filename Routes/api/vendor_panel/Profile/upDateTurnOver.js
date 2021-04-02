const express = require('express')
const vendor = require('../../../../model/admin_model/new_vendor')

const router = express.Router();

router.put('/', async(req, res) => {
    try{

            await vendor.findById(req.query.id, (err, vendor) => {
                    vendor.update_turn_over = req.body.update_turn_over;
                 
                    vendor.save();
                    const payload = {
                        status: 'Update turn overSuccessfully'
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