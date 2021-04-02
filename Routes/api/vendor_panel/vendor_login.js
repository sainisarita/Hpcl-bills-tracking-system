const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Vendor = require('../../../model/admin_model/new_vendor');


router.post(
  '/',
  async (req, res) => {
   

    const { email, password } = req.body;
    // console.log(email, password);

    try {
      let user = await Vendor.findOne({ vendor_id: email});
      

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid' }] });
      }

     if(password !== user.vendor_password) {
        return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid Credentials' }] });
     }

     

      const payload = {
        user: {
          id: user.id
        }
      };
      console.log(payload);

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token, payload });
          
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
