const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  bandName: {
    type: String,
    required: true
  },
  instrument_needed: {
    type: String,
    required: true
  },
  members: {
    type: String
  }
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
