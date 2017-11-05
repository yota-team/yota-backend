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
          let menit = req.query.minute
          if(menit <= 9){
            return parseInt(minute) <= 9
          } else if(menit <= 19){
            return parseInt(minute) > 10 && parseInt(minute) <= 19
          } else if(menit <= 29){
            return parseInt(minute) > 20 && parseInt(minute) <= 29
          } else if(menit <= 39){
            return parseInt(minute) > 30 && parseInt(minute) <= 39
          } else if(menit <= 49){
            return parseInt(minute) > 40 && parseInt(minute) <= 49
          } else if(menit <= 59){
            return parseInt(minute) > 50 && parseInt(minute) <= 59  
          }
        })
        res.send(filteredByMinute)
      })
      .catch(err => console.error(err))

  }
}
