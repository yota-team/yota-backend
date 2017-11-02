const Car = require('../models/Car');

var dummyDestinations = [
  {
    // 
  }
]

module.exports = {
  create: (req, res) => {
    var arrayOfDataCreated = []
    dummyCars.map((car, idx) => {
      Car.create(car)
        .then(created => {
          arrayOfDataCreated.push(created)
          console.log(created)
          if (idx === dummyCars.length-1) {
            res.send(arrayOfDataCreated)
          }
        })
        .catch(err => console.error(err))
    })
  }
}
