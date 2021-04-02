const express = require('express')
const Envoice = require('../../../../model/vendor_model/submit_envoice')
const router = express.Router();

router.get('/', async (req, res) =>{
    console.log(req.query.id)
    Envoice.find({ VENDOR_REF : req.query.id}, function (err, docs) { 

        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log(docs)
            res.json(docs)
        } 
    });


})


router.delete('/', async (req, res) =>{
    const id = req.query.id

    await Envoice.findByIdAndRemove(id).exec();
    res.send('deleted')
})

module.exports = router