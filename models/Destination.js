const mongoose = require('mongoose');
const Schema = mongoose.Schema

const destinationSchema = new Schema ({
  destination_code: String,
  list_of_destination: Array
},{
  timestamps: true
})

module.exports = Destination = mongoose.model('Destination', destinationSchema)
