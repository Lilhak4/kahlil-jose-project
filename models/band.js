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
    type: String
  },
  user: {
    type: String
  }
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
