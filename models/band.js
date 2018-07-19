const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const bandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  instrument_needed: {
    type: [String],
    required: true
  },
  member: [{
    type: ObjectId,
    ref: 'User'
  }],
  owner: {
    type: ObjectId,
    ref: 'User'
  },
  genre: {
    type: String,
    required: true
  },
  applicants: [{
    type: ObjectId,
    ref: 'User'
  }]
});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;
