const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


const User = require('../../../model/admin_model/new_admin');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  
  async (req, res) => {


    const { name, email_1, password_1, area_location} = req.body;
    console.log(req.body)

    try {
      let user = await User.findOne({ email_1 });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      

      user = new User({
        name : name,
        email : email_1,
        area_location : area_location,
        password_1
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password_1, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
