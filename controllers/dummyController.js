const Destination = require('../models/Destination')
const Car = require('../models/Car')
const Position = require('../models/Position')

module.exports = {
  create: (req, res) => {
    Destination.find()
      .then(response => {
        // console.log(response.length)
        if (response.length != 0) {
          res.send('DATA DUMMY SUDAH ADA')
        } else {

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
                            // mobil pertama
                            { latitude: -6.260899, longitude: 106.781877, car: dummyCars[0]._id },
                            { latitude: -6.260579, longitude: 106.781807, car: dummyCars[0]._id },
                            { latitude: -6.260168, longitude: 106.781769, car: dummyCars[0]._id },
                            { latitude: -6.259837, longitude: 106.781742, car: dummyCars[0]._id },
                            { latitude: -6.259480, longitude: 106.781726, car: dummyCars[0]._id },
                            // mobil kedua
                            { latitude: -6.259171, longitude: 106.781691, car: dummyCars[1]._id },
                            { latitude: -6.258742, longitude: 106.781642, car: dummyCars[1]._id },
                            { latitude: -6.258059, longitude: 106.781621, car: dummyCars[1]._id },
                            { latitude: -6.257408, longitude: 106.781610, car: dummyCars[1]._id },
                            { latitude: -6.256741, longitude: 106.781610, car: dummyCars[1]._id },
                            // mobil ketiga
                            { latitude: -6.256080, longitude: 106.781621, car: dummyCars[2]._id },
                            { latitude: -6.255339, longitude: 106.781664, car: dummyCars[2]._id },
                            { latitude: -6.254699, longitude: 106.781648, car: dummyCars[2]._id },
                            { latitude: -6.254091, longitude: 106.781621, car: dummyCars[2]._id },
                            { latitude: -6.253355, longitude: 106.781610, car: dummyCars[2]._id },

                            // mobil pertama
                            { latitude: -6.261899, longitude: 106.781877, car: dummyCars[0]._id },
                            { latitude: -6.261579, longitude: 106.781807, car: dummyCars[0]._id },
                            { latitude: -6.261168, longitude: 106.781769, car: dummyCars[0]._id },
                            { latitude: -6.258837, longitude: 106.781742, car: dummyCars[0]._id },
                            { latitude: -6.258480, longitude: 106.781726, car: dummyCars[0]._id },
                            // mobil kedua
                            { latitude: -6.258171, longitude: 106.781691, car: dummyCars[1]._id },
                            { latitude: -6.259742, longitude: 106.781642, car: dummyCars[1]._id },
                            { latitude: -6.259059, longitude: 106.781621, car: dummyCars[1]._id },
                            { latitude: -6.258408, longitude: 106.781610, car: dummyCars[1]._id },
                            { latitude: -6.256741, longitude: 106.781610, car: dummyCars[1]._id },
                            // mobil ketiga
                            { latitude: -6.257080, longitude: 106.781621, car: dummyCars[2]._id },
                            { latitude: -6.256339, longitude: 106.781664, car: dummyCars[2]._id },
                            { latitude: -6.254699, longitude: 106.781648, car: dummyCars[2]._id },
                            { latitude: -6.255091, longitude: 106.781621, car: dummyCars[2]._id },
                            { latitude: -6.254355, longitude: 106.781610, car: dummyCars[2]._id }
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

        }
      })
      .catch(err => console.log(err))
  }
}
