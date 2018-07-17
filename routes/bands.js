const express = require('express');
const router = express.Router();
const Band = require('../models/band');

router.get('/add', (req, res, next) => {
  res.render('band-add');
});

router.post('/add', (req, res, next) => {
  const data = {
    name: req.body.name,
    instrument_needed: [],
    members: req.body.members,
    genre: req.body.genre,
    owner: req.body.owner
  };

  if (req.body.Guitar) {
    data.instrument_needed.push(req.body.Guitar);
  }

  if (req.body.Singer) {
    data.instrument_needed.push(req.body.Singer);
  }

  if (req.body.Drum) {
    data.instrument_needed.push(req.body.Drum);
  }

  if (req.body.Bass) {
    data.instrument_needed.push(req.body.Bass);
  }

  const newBand = new Band(data);
  newBand.save()
    .then((bands) => {
      res.redirect('/'); //    ------>para que no se quede el ordenador aqui toda la vida
    })
    .catch((error) => {
      console.log(error);
    });
});

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
    .then(data => {
      res.render('band-details', {band: data});
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
