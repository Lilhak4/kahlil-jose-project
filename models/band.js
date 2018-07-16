const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  instrument_needed: {
    type: [String],
    required: true
  },
  members: {
    type: [String],
    required: true
  },
  owner: {
    type: String,
    required: true

  },
  genre: {
    type: String,
    required: true
  }
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
