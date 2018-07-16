'use strict';

const mongoose = require('mongoose');
const Band = require('../models/band');

const dbName = 'brand-title';
mongoose.connect(`mongodb://localhost/${dbName}`);

const bands = [
  {
    name: 'Mc Kahlil',
    instrument_needed: ['Singer', 'Bass'],
    members: 'bgukfguk',
    owner: 'kufbubu',
    genre: 'Hip-hop'
  },

  {
    name: 'Manolo and mamakanuleras',
    instrument_needed: ['Guitar', 'Singer', 'Bass'],
    members: 'sgdndg',
    owner: 'hsfnbsgn',
    genre: 'Punk-rock'
  },

  {
    name: 'Coucou band',
    instrument_needed: ['Guitar', 'Bass', 'Drums'],
    members: 'nsfnfsn',
    owner: 'mhfmdg',
    genre: 'Jazz'
  },
  {
    name: 'Jose in da hood',
    instrument_needed: ['Guitar', 'Singer', 'Drums', 'Bass'],
    members: 'nfsng',
    owner: 'advad',
    genre: 'Metal'
  }
  // {

  //   name: 'Waca-band',
  //   instrument_needed: [' Bass', ' Singer', ' Drums'],
  //   members: 'nfsng',
  //   owner: 'advad',
  //   genre: 'Tropical-pachangoso'
  // }
];
Band.create(bands)
  .then(() => {
    console.log(`Created ${bands.length} bands`);
    mongoose.connection.close();
  })
  .catch((err) => {
    throw (err);
  });
