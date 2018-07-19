const express = require('express');
const router = express.Router();
const Band = require('../models/band');

router.get('/:id', (req, res, next) => {
  const bandId = req.params.id;
  Band.findById(bandId)
    .populate('applicants')
    .then((result) => {
      const data = {
        band: result,
        applicants: result.applicants
      };
      res.render('band-apply', data);
    })
    .catch(next);
});

router.post('/:id/accept', (req, res, next) => {
  const bandId = req.params.id;
  const applicant = req.body.applyId;
  const update = { $unset: { applicants: applicant } };
  const update2 = { $push: { members: applicant } };
  Band.findByIdAndUpdate(bandId, update, update2)
    .then(result => {
    //   req.flash('apply-message', 'Applicant added');
      res.redirect('/band/' + bandId);
    })
    .catch(next);
});

router.post('/:id/reject', (req, res, next) => {
  const bandId = req.params.id;
  const applicant = req.body.applyId;
  const update = { $unset: { applicants: applicant } };
  Band.update(bandId, update)
    .then(result => {
    //   req.flash('apply-message', 'Applicant removed');
      res.redirect('/band/' + bandId);
    })
    .catch(next);
});

module.exports = router;
