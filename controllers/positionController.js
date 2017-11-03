const Position = require('../models/Position');

module.exports = {
  all: (req, res) => {
    Position.find()
      .populate({
        path: 'car',
        populate: {
          path: 'destination'
        }
      })
      .then(dataPosition => res.send(dataPosition))
      .catch(err => console.error(err))
  },
  create: (req, res) => {
    Position.create(req.body)
      .then(created => res.send(created))
      .catch(err => console.error(err))
  },
  filter: (req, res) => {
    Position.find()
      .populate({
        path: 'car',
        populate: {
          path: 'destination'
        }
      })
      .then(dataPosition => {
        var filteredByHour = dataPosition.filter(data => {
          var hour = data.createdAt.toString().split(' ')[4].split(':')[0]
          return parseInt(hour) == req.query.hour
        })
        var filteredByMinute = filteredByHour.filter(data => {
          var minute = data.createdAt.toString().split(' ')[4].split(':')[1]
          return parseInt(minute) == req.query.minute
        })
        res.send(filteredByMinute)
      })
      .catch(err => console.error(err))

  }
}
