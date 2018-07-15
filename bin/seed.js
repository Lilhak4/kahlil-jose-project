'use strict';

const mongoose = require('mongoose');
const Band = require('../models/band');

const dbName = 'brand-title';
mongoose.connect(`mongodb://localhost/${dbName}`);

const bands = [
  {
    name: 'Manolo and the mofos',
    intrument_needed: 'ngk',
    members: 'bgukfguk',
    user: 'kufbubu'
  },

  {
    name: 'Manolo and mamakanuleras',
    intrument_needed: 'fhfdhfs',
    members: 'sgdndg',
    user: 'hsfnbsgn'
  },

  {
    name: 'Kahlil and the bros',
    intrument_needed: 'nfsnsf',
    members: 'nsfnfsn',
    user: 'mhfmdg'
  },

  {
    name: 'Jose in da hood',
    intrument_needed: 'adbf',
    members: 'nfsng',
    user: 'advad'
  }
];

Band.create(bands)
  .then(() => {
    console.log(`Created ${bands.length} bands`);
    mongoose.connection.close();
  })
  .catch((err) => {
    throw (err);
  });
