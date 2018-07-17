const express = require('express');
const router = express.Router();
const Band = require('../models/band');
const User = require('../models/user');

router.get('/', function (req, res, next) {
  res.render('profile');
});

// if (req.body.owner == req.body.username) { ***trying to include current band that the user is a owner***

// }

module.exports = router;
