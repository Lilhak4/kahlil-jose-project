'use strict';

const mongoose = require('mongoose');
const Band = require('../models/band');

const dbName = 'brand-title';
mongoose.connect(`mongodb://localhost/${dbName}`);

const bands = [
  {
    name: 'Manolo and the mofos',
    instrument_needed: ['Singer', 'Guitar'],
    members: 'bgukfguk',
    user: 'kufbubu'
  },

  {
    name: 'Manolo and mamakanuleras',
    instrument_needed: ['Guitar', 'Singer', 'Bass'],
    members: 'sgdndg',
    user: 'hsfnbsgn'
  },

  {
    name: 'Kahlil and the bros',
    instrument_needed: ['Guitar', 'Singer', 'Drums'],
    members: 'nsfnfsn',
    user: 'mhfmdg'
  },

  {
    name: 'Jose in da hood',
    instrument_needed: ['Bass', 'Singer'],
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
