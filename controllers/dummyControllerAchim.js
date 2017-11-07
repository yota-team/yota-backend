const Destination = require('../models/Destination')
const Car = require('../models/Car')
const Position = require('../models/Position')

module.exports = {
  create: (req, res) => {
    Destination.find()
      .then(response => {
        // console.log(response.length)
        // if (response.length != 0) {
        //   res.send('DATA DUMMY SUDAH ADA')
        // } else {

          var dummyDestinations = [
            {
              destination_code: 'd0001',
              list_of_destination: ['pondok indah', 'tanah kusir', 'gandaria']
            },
            {
              destination_code: 'd0002',
              list_of_destination: ['kampung rambutan', 'pasar rebo', 'pasar minggu']
            },
            {
              destination_code: 'd0003',
              list_of_destination: ['kebun jeruk', 'indosiar', 'cempaka putih']
            }
          ]

          dummyDestinations.map((destination, idx) => {
            Destination.create(destination)
              .then(created => {
                dummyDestinations[idx]._id = created._id
                // console.log(created)
                // console.log('=====', dummyDestinations[idx])
                if (idx == dummyDestinations.length-1) {

                  var dummyCars = [
                    {
                      car_code: 'c0001',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0002',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0003',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0004',
                      destination: dummyDestinations[0]._id
                    },
                    {
                      car_code: 'c0005',
                      destination: dummyDestinations[2]._id
                    },
                    {
                      car_code: 'c0006',
                      destination: dummyDestinations[2]._id
                    }
                  ]

                  dummyCars.map((car, idx) => {
                    Car.create(car)
                      .then(created => {
                        dummyCars[idx]._id = created._id
                        // console.log(created)
                        if (idx == dummyCars.length-1) {

                          var dummyPositions = [

                            // mobil kedua
                            { latitude: -6.307745, longitude: 106.880915, car: dummyCars[1]._id },
                            { latitude: -6.306817, longitude: 106.879611, car: dummyCars[1]._id },
                            { latitude: -6.309904, longitude: 106.882797, car: dummyCars[1]._id },
                            { latitude: -6.310107, longitude: 106.882738, car: dummyCars[1]._id },
                            { latitude: -6.309851, longitude: 106.882084, car: dummyCars[1]._id },
                            { latitude: -6.309579, longitude: 106.881741, car: dummyCars[1]._id },
                            { latitude: -6.306588, longitude: 106.880636, car: dummyCars[1]._id },
                            { latitude: -6.306908, longitude: 106.879263, car: dummyCars[1]._id },
                            { latitude: -6.306529, longitude: 106.878689, car: dummyCars[1]._id },
                            { latitude: -6.307345, longitude: 106.877718, car: dummyCars[1]._id },
                            { latitude: -6.307852, longitude: 106.875572, car: dummyCars[1]._id },
                            { latitude: -6.307857, longitude: 106.873576, car: dummyCars[1]._id },
                            { latitude: -6.308236, longitude: 106.874064, car: dummyCars[1]._id },
                            { latitude: -6.308748, longitude: 106.871822, car: dummyCars[1]._id },
                            { latitude: -6.308252, longitude: 106.869537, car: dummyCars[1]._id },
                            { latitude: -6.306663, longitude: 106.866296, car: dummyCars[1]._id },
                            { latitude: -6.306546, longitude: 106.865593, car: dummyCars[1]._id },
                            { latitude: -6.306487, longitude: 106.865368, car: dummyCars[1]._id },
                            { latitude: -6.305501, longitude: 106.863861, car: dummyCars[1]._id },
                            { latitude: -6.304723, longitude: 106.862788, car: dummyCars[1]._id },
                            { latitude: -6.302422, longitude: 106.858969, car: dummyCars[1]._id },
                            { latitude: -6.302390, longitude: 106.857193, car: dummyCars[1]._id },
                            { latitude: -6.302609, longitude: 106.856007, car: dummyCars[1]._id },
                            { latitude: -6.302508, longitude: 106.855052, car: dummyCars[1]._id },
                            { latitude: -6.302748, longitude: 106.853325, car: dummyCars[1]._id },
                            { latitude: -6.851839, longitude: 106.851839, car: dummyCars[1]._id },
                            { latitude: -6.304502, longitude: 106.849790, car: dummyCars[1]._id },
                            { latitude: -6.303947, longitude: 106.848900, car: dummyCars[1]._id },
                            { latitude: -6.304288, longitude: 106.846207, car: dummyCars[1]._id },
                            { latitude: -6.303776, longitude: 106.846690, car: dummyCars[1]._id },
                            { latitude: -6.303925, longitude: 106.843675, car: dummyCars[1]._id },
                            { latitude: -6.303274, longitude: 106.842924, car: dummyCars[1]._id },
                            { latitude: -6.301024, longitude: 106.835897, car: dummyCars[1]._id },
                            { latitude: -6.300150, longitude: 106.833547, car: dummyCars[1]._id },
                            { latitude: -6.298241, longitude: 106.831820, car: dummyCars[1]._id },
                            { latitude: -6.296727, longitude: 106.827807, car: dummyCars[1]._id },
                            { latitude: -6.295991, longitude: 106.827539, car: dummyCars[1]._id },
                            { latitude: -6.294306, longitude: 106.822947, car: dummyCars[1]._id },
                            { latitude: -6.294306, longitude: 106.822475, car: dummyCars[1]._id },
                            { latitude: -6.293522, longitude: 106.822287, car: dummyCars[1]._id },
                            { latitude: -6.293522, longitude: 106.822287, car: dummyCars[1]._id },
                            { latitude: -6.293725, longitude: 106.821236, car: dummyCars[1]._id },
                            { latitude: -6.293016, longitude: 106.819203, car: dummyCars[1]._id },
                            { latitude: -6.292632, longitude: 106.817138, car: dummyCars[1]._id },
                            { latitude: -6.292003, longitude: 106.816129, car: dummyCars[1]._id },
                            { latitude: -6.292451, longitude: 106.812422, car: dummyCars[1]._id },
                            { latitude: -6.291923, longitude: 106.810180, car: dummyCars[1]._id },
                            { latitude: -6.292547, longitude: 106.808083, car: dummyCars[1]._id },
                            { latitude: -6.292083, longitude: 106.805503, car: dummyCars[1]._id },
                            { latitude: -6.292675, longitude: 106.804264, car: dummyCars[1]._id },
                            { latitude: -6.292040, longitude: 106.802097, car: dummyCars[1]._id },
                            { latitude: -6.292525, longitude: 106.797741, car: dummyCars[1]._id },
                            { latitude: -6.292008, longitude: 106.798449, car: dummyCars[1]._id },
                            { latitude: -6.292537, longitude: 106.797029, car: dummyCars[1]._id },
                            { latitude: -6.291998, longitude: 106.795602, car: dummyCars[1]._id },
                            { latitude: -6.292499, longitude: 106.794111, car: dummyCars[1]._id },
                            { latitude: -6.291939, longitude: 106.792598, car: dummyCars[1]._id }

                          ]

                          dummyPositions.map((position, idx) => {
                            Position.create(position)
                              .then(created => {
                                dummyPositions[idx]._id = created._id
                                // console.log(created)
                                if (idx == dummyPositions.length-1) {

                                  res.send({
                                    dummyDestinations,
                                    dummyCars,
                                    dummyPositions
                                  })

                                }
                              })
                              .catch(err => console.error(err))
                          })

                        }
                      })
                      .catch(err => console.error(err))
                  })

                }
              })
              .catch(err => console.error(err))
          })

        // }
      })
      .catch(err => console.log(err))
  }
}
