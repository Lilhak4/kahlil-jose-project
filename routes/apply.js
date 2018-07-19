const express = require('express');
const router = express.Router();
const Band = require('../models/band');

router.get('/:id', (req, res, next) => {
  const bandId = req.params.id;
  Band.findById(bandId)
    .populate('applicants')
    .then((data) => {
      const applicants = data.applicants;
      res.render('band-apply', {applicants});
    })
    .catch(next);
});

module.exports = router;
