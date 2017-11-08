const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const Position = require('../models/Position')
const Car = require('../models/Car')
const Destination = require('../models/Destination')

chai.use(chaiHttp)

var newPosition = {
  latitude: -6.123234,
  longitude: 123.987098,
  car: null
}

var newPosition2 = {
  latitude: -6.876345,
  longitude: 123.098345,
  car: null
}

var newCar = {
  car_code: 'c0001',
  destination: null
}

var newDestination = {
  destination_code: 'd0001',
  list_of_destination: ['blok_m','monas']
}

describe('TESTING CREATE POSITION: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
      .then(response => {
        newDestination._id = response._id
        newCar.destination = newDestination._id

        Car.create(newCar)
          .then(response2 => {
            newCar._id = response2._id
            newPosition.car = newCar._id
            done()
          })
          .catch(err2 => console.log(err2))

      })
      .catch(err => console.log(err))
  })

  afterEach(done => {
    Position.remove({_id: newPosition._id})
      .then(response => {

        Car.remove({_id: newCar._id})
          .then(() => {

            Destination.remove({_id: newDestination._id})
              .then(() => done())
              .catch(err3 => console.log(err3))

          })
          .catch(err2 => console.log(err2))

      })
      .catch(err => console.log(err))
  })

  it ('should return response status 200', (done) => {
    chai.request(app)
    .post(`/positions`)
    .send(newPosition)
    .end((err, response) => {
      newPosition._id = response.body._id
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "object"', (done) => {
    chai.request(app)
    .post('/positions')
    .send(newPosition)
    .end((err, response) => {
      newPosition._id = response.body._id
      response.body.should.be.an('object')
      done()
    })
  })

  it (`should return response.body.latitude = ${newPosition.latitude}`, (done) => {
    chai.request(app)
    .post('/positions')
    .send(newPosition)
    .end((err, response) => {
      newPosition._id = response.body._id
      response.body.latitude.should.equal(newPosition.latitude)
      done()
    })
  })

  it (`should return response.body.longitude = ${newPosition.longitude}`, (done) => {
    chai.request(app)
    .post('/positions')
    .send(newPosition)
    .end((err, response) => {
      newPosition._id = response.body._id
      response.body.longitude.should.equal(newPosition.longitude)
      done()
    })
  })

})






describe('TESTING GET ALL POSITIONS: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
      .then(response => {
        newDestination._id = response._id
        newCar.destination = newDestination._id

        Car.create(newCar)
          .then(response2 => {
            newCar._id = response2._id
            newPosition.car = newCar._id
            newPosition2.car = newCar._id

            Position.create(newPosition)
              .then(response3 => {
                newPosition._id = response3._id

                Position.create(newPosition2)
                  .then(response4 => {
                    newPosition2._id = response4._id
                    done()
                  })
                  .catch(err4 => console.log(err4))

              })
              .catch(err3 => console.log(err3))

          })
          .catch(err2 => console.log(err2))

      })
      .catch(err => console.log(err))
  })

  afterEach(done => {
    Position.remove({_id: newPosition2._id})
      .then(() => {

        Position.remove({_id: newPosition._id})
          .then(() => {

            Car.remove({_id: newCar._id})
              .then(() => {

                Destination.remove({_id: newDestination._id})
                  .then(() => done())
                  .catch(err4 => console.log(err4))

              })
              .catch(err3 => console.log(err3))

          })
          .catch(err2 => console.log(err2))

      })
      .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .get('/positions')
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "array"', (done) => {
    chai.request(app)
    .get('/positions')
    .end((err, response) => {
      response.body.should.be.an('array')
      done()
    })
  })

  it (`should return response.body[0].latitude = ${newPosition.latitude}`, (done) => {
    chai.request(app)
    .get('/positions')
    .end((err, response) => {
      response.body[0].latitude.should.equal(newPosition.latitude)
      done()
    })
  })

  it (`should return response.body[0].longitude = ${newPosition.longitude}`, (done) => {
    chai.request(app)
    .get('/positions')
    .end((err, response) => {
      response.body[0].longitude.should.equal(newPosition.longitude)
      done()
    })
  })

  it (`should return response.body[1].latitude = ${newPosition2.latitude}`, (done) => {
    chai.request(app)
    .get('/positions')
    .end((err, response) => {
      response.body[1].latitude.should.equal(newPosition2.latitude)
      done()
    })
  })

  it (`should return response.body[1].longitude = ${newPosition2.longitude}`, (done) => {
    chai.request(app)
    .get('/positions')
    .end((err, response) => {
      response.body[1].longitude.should.equal(newPosition2.longitude)
      done()
    })
  })

})





// describe('TESTING GET ONE POSITION: ', () => {
//
//   beforeEach(done => {
//     Destination.create(newDestination)
//       .then(response => {
//         newDestination._id = response._id
//         newCar.destination = newDestination._id
//
//         Car.create(newCar)
//           .then(response2 => {
//             newCar._id = response2._id
//             newPosition.car = newCar._id
//             newPosition2.car = newCar._id
//
//             Position.create(newPosition)
//               .then(response3 => {
//                 newPosition._id = response3._id
//
//                 Position.create(newPosition2)
//                   .then(response4 => {
//                     newPosition2._id = response4._id
//                     done()
//                   })
//                   .catch(err4 => console.log(err4))
//
//               })
//               .catch(err3 => console.log(err3))
//
//           })
//           .catch(err2 => console.log(err2))
//
//       })
//       .catch(err => console.log(err))
//   })
//
//   afterEach(done => {
//     Position.remove({_id: newPosition2._id})
//       .then(() => {
//
//         Position.remove({_id: newPosition._id})
//           .then(() => {
//
//             Car.remove({_id: newCar._id})
//               .then(() => {
//
//                 Destination.remove({_id: newDestination._id})
//                   .then(() => done())
//                   .catch(err4 => console.log(err4))
//
//               })
//               .catch(err3 => console.log(err3))
//
//           })
//           .catch(err2 => console.log(err2))
//
//       })
//       .catch(err => console.log(err))
//   })
//
//   it ('should return response status = 200', (done) => {
//     chai.request(app)
//     .get(`/positions/${newPosition._id}`)
//     .end((err, response) => {
//       response.status.should.equal(200)
//       done()
//     })
//   })
//
//   it ('should return response.body as an "object"', (done) => {
//     chai.request(app)
//     .get(`/positions/${newPosition._id}`)
//     .end((err, response) => {
//       response.body.should.be.an('object')
//       done()
//     })
//   })
//
//   it (`should return response.body.latitude = ${newPosition.latitude}`, (done) => {
//     chai.request(app)
//     .get(`/positions/${newPosition._id}`)
//     .end((err, response) => {
//       response.body.latitude.should.equal(newPosition.latitude)
//       done()
//     })
//   })
//
//   it (`should return response.body.longitude = ${newPosition.longitude}`, (done) => {
//     chai.request(app)
//     .get(`/positions/${newPosition._id}`)
//     .end((err, response) => {
//       response.body.longitude.should.equal(newPosition.longitude)
//       done()
//     })
//   })
//
// })





// describe('TESTING UPDATE POSITION: ', () => {
//
//   beforeEach(done => {
//     Position.create(newPosition)
//     .then(response => {
//       newPosition._id = response._id
//       done()
//     })
//     .catch(err => console.log(err))
//   })
//
//   afterEach(done => {
//     Position.remove({
//       _id: newPosition._id
//     })
//     .then(response => done())
//     .catch(err => console.log(err))
//   })
//
//   it ('should return response status = 200', (done) => {
//     delete newPosition2._id
//     chai.request(app)
//     .put(`/positions/${newPosition._id}`)
//     .send(newPosition2)
//     .end((err, response) => {
//       response.status.should.equal(200)
//       done()
//     })
//   })
//
//   it (`should return response2.body.car_code = "${newPosition2.car_code}"`, (done) => {
//     delete newPosition2._id
//     chai.request(app)
//     .put(`/positions/${newPosition._id}`)
//     .send(newPosition2)
//     .end((err, response) => {
//
//       chai.request(app)
//       .get(`/positions/${newPosition._id}`)
//       .end((err2, response2) => {
//         response2.body.car_code.should.equal(newPosition2.car_code)
//         done()
//       })
//
//     })
//   })
//
// })
