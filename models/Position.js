const mongoose = require('mongoose');
const Schema = mongoose.Schema

const positionSchema = new Schema ({
  lat: Number,
  lng: Number,
  car: {type: Schema.Types.ObjectId, ref: 'Car'},
},{
  timestamps: true
})

module.exports = Position = mongoose.model('Position', positionSchema)
