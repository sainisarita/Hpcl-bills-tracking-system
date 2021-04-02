const express = require('express');
const Search_bill = require('../../../../model/vendor_model/submit_envoice')
const router = express.Router();

router.post('/', async (req, res) => {
    const {update_turn_over} = req.body;
    try {

        let user = await Search_bill.findOne({ BTS_SR_NO : update_turn_over});
        res.json(user);

    }catch (err) {
            res.json(err);
    }
})

module.exports = router