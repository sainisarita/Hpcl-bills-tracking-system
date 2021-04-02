const express = require('express')
const Envoice = require('../../../../model/vendor_model/submit_envoice')

const router = express.Router();

router.get('/', async (req, res) => {
    Envoice.find({}, function (err, user) {
        res.json(user)
    });


})

module.exports = router