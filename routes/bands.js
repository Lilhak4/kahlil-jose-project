const express = require('express');
const router = express.Router();
const Band = require('../models/band');

router.get('/add', (req, res, next) => {
  if (req.session.currentUser) {
    res.render('band-add');
  } else {
    res.redirect('/auth/signup');
  }
});

router.post('/add', (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/auth/signup');
    return;
  }
  const data = {
    name: req.body.name,
    instrument_needed: [],
    members: req.body.members,
    genre: req.body.genre,
    owner: req.session.currentUser._id
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
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/auth/signup');
    return;
  }
  const bandId = req.params.id;
  Band.findById(bandId)
    .populate('member')
    .then(result => {
      const data = {
        band: result,
        owner: result.owner._id.toString() === req.session.currentUser._id,
        alreadyApplied: !!result.applicants.find((item) => item.toString() === req.session.currentUser._id),
        applies: req.flash('apply-message')
      };
      res.render('band-details', data);
    })
    .catch(next);
});

router.post('/apply/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect('/auth/signup');
    return;
  }
  const bandId = req.params.id;
  const filter = {_id: bandId};
  const update = { $push: { applicants: req.session.currentUser._id } };
  Band.update(filter, update)
    .then(result => {
      // const userApplicant = req.session.currentUser;
      req.flash('apply-message', 'You already have applied!');
      res.redirect('/band/' + bandId);
    })
    .catch(next);
});

module.exports = router;
