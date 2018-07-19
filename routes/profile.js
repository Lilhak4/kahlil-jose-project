const express = require('express');
const router = express.Router();
const Band = require('../models/band');
const ObjectId = require('mongoose').Types.ObjectId;
// const User = require('../models/user');

router.get('/', (req, res, next) => {
  if (req.session.currentUser) {
    const ownerId = req.session.currentUser._id;
    Band.findOne({owner: ObjectId(ownerId)})
      .then((band) => {
        const data = {band: band};
        res.render('profile', data);
      })
      .catch(next);
  } else {
    res.redirect('/auth/signup');
  }
});

// if (req.body.owner == req.body.username) { ***trying to include current band that the user is a owner***

// }

router.get('/edit', (req, res, next) => {
  res.render('profile-edit');
});

module.exports = router;
