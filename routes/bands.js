const express = require('express');
const router = express.Router();
const Band = require('../models/band');

router.get('/search', (req, res, next) => {
  const instrument = req.query.instrument_needed;
  Band.find({instrument_needed: instrument})
    .then(data => {
      res.render('display-bands', {bands: data});
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/:id', (req, res, next) => {
  const bandId = req.params.id;
  Band.findById(bandId)
    .then(band => {
      res.render('band-details', {band: band});
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
