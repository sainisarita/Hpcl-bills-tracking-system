const express = require('express')
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('update_home')
});

module.exports = router