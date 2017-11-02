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
                            {
                              lat: -6.254394,
                              lng: 106.7815577,
                              car: dummyCars[0]._id
                            },
                            {
                              lat: -6.254400,
                              lng: 106.7815589,
                              car: dummyCars[0]._id
                            },
                            {
                              lat: -6.254410,
                              lng: 106.7815589,
                              car: dummyCars[0]._id
                            },
                            {
                              lat: -6.254420,
                              lng: 106.7815587,
                              car: dummyCars[0]._id
                            },
                            {
                              lat: -6.254420,
                              lng: 106.7815587,
                              car: dummyCars[0]._id
                            },
                            // mobil kedua
                            {
                              lat: -6.254399,
                              lng: 106.7815587,
                              car: dummyCars[1]._id
                            },
                            {
                              lat: -6.254410,
                              lng: 106.7815599,
                              car: dummyCars[1]._id
                            },
                            {
                              lat: -6.254415,
                              lng: 106.7815599,
                              car: dummyCars[1]._id
                            },
                            {
                              lat: -6.254430,
                              lng: 106.7815590,
                              car: dummyCars[1]._id
                            },
                            {
                              lat: -6.254422,
                              lng: 106.7815589,
                              car: dummyCars[1]._id
                            },
                            // mobil ketiga
                            {
                              lat: -6.254359,
                              lng: 106.7815567,
                              car: dummyCars[2]._id
                            },
                            {
                              lat: -6.254400,
                              lng: 106.7815589,
                              car: dummyCars[2]._id
                            },
                            {
                              lat: -6.254411,
                              lng: 106.7815589,
                              car: dummyCars[2]._id
                            },
                            {
                              lat: -6.254422,
                              lng: 106.7815589,
                              car: dummyCars[2]._id
                            },
                            {
                              lat: -6.254412,
                              lng: 106.7815599,
                              car: dummyCars[2]._id
                            }
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
