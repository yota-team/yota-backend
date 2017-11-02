const Car = require('../models/Car');

module.exports = {
  all: (req, res) => {
    Car.find()
      .populate('destinations')
      .then(dataCar => res.send(dataCar))
      .catch(err => console.error(err))
  },
  create: (req, res) => {
    Car.create(req.body)
      .then(created => res.send(created))
      .catch(err => console.error(err))
  },
  byId: (req, res) => {
    Car.findOne({_id: req.params.id})
      .populate('destinations')
      .then(station => res.send(station))
      .catch(err => console.error(err))
  },
  put: (req, res) => {
    Car.update({ _id: req.params.id }, { $set: req.body })
      .then(() => res.send('updated'))
      .catch(err => console.error(err))
  },
  remove: (req, res) => {
    Car.remove({_id: req.params.id})
      .then(() => res.send('deleted'))
      .catch(err => console.error(err))
  }
}
