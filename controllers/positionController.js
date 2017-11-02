const Position = require('../models/Position');

module.exports = {
  all: (req, res) => {
    Position.find()
      .populate('car')
      .then(dataPosition => res.send(dataPosition))
      .catch(err => console.error(err))
  },
  create: (req, res) => {
    Position.create(req.body)
      .then(created => res.send(created))
      .catch(err => console.error(err))
  }
}
