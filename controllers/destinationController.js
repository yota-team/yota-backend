const Destination = require('../models/Destination');

module.exports = {
  all: (req, res) => {
    Destination.find()
      .then(dataDestinations => res.send(dataDestinations))
      .catch(err => console.error(err))
  },
  create: (req, res) => {
    Destination.create(req.body)
      .then(created => res.send(created))
      .catch(err => console.error(err))
  },
  byId: (req, res) => {
    Destination.findOne({_id: req.params.id})
      .then(station => res.send(station))
      .catch(err => console.error(err))
  },
  put: (req, res) => {
    Destination.update({ _id: req.params.id }, { $set: req.body })
      .then(() => res.send('updated'))
      .catch(err => console.error(err))
  },
  remove: (req, res) => {
    Destination.remove({_id: req.params.id})
      .then(() => res.send('deleted'))
      .catch(err => console.error(err))
  }
}
