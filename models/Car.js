const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema ({
  car_code: String,
  destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}]
},{
  timestamps: true
})

module.exports = Car = mongoose.model('Car', carSchema)
