const express = require('express');
const router = express.Router();
const Band = require('../models/band');

router.get('/search', (req, res, next) => {
  const instrument = req.query.instrument_needed;
  Band.find({instrument_needed: instrument})
    .then(data => {
      res.render('band-detail', {band: data});
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
