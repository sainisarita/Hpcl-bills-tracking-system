const express = require('express');
const router = express.Router();
const Envoice = require('../../../model/vendor_model/submit_envoice')
router.put('/', async(req, res) => {
    try {

        const {payment_id,payment_date,paid_amount,hard_copy_status,reciept_number,emrr_status} = req.body;

        await Envoice.findById(req.query.id, (err, Envoice) => {
            Envoice.PAYMENT_ID = payment_id;
            Envoice.PAYMENT_DATE = payment_date;
            Envoice.PAID_AMOUNT = paid_amount;
            Envoice.HARD_COPY_STATUS = hard_copy_status;
            Envoice.RECIEPT_NUMBER = reciept_number;
            Envoice.EMRR_STATUS = emrr_status
         
            Envoice.save();
            const payload = {
                status: 'Updation Successfully'
            }
            res.json(payload)
    }).catch(err =>{
        const message = {
            status: 'Payment Process Failed'
        }
        res.json(message)
    })

    }catch(err) {

    }
});

module.exports = router;