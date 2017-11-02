const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const Car = require('../models/Car')
const Destination = require('../models/Destination')

chai.use(chaiHttp)

var newCar = {
  car_code: 'c0001',
  destinations: null
}

var newCar2 = {
  car_code: 'c0002',
  destinations: null
}

var newDestination = {
  destination_code: 'd0001',
  list_of_destination: ['blok_m','monas']
}

describe('CREATE CAR: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
      .then(response => {
        newDestination._id = response._id
        done()
      })
      .catch(err => console.log(err))
  })

  afterEach(done => {
    Car.remove({_id: newCar._id})
      .then(response => {

        Destination.remove({_id: newDestination._id})
          .then(() => done())
          .catch(err2 => console.log(err2))

      })
      .catch(err => console.log(err))
  })

  it ('should return response status 200', (done) => {
    chai.request(app)
    .post(`/cars`)
    .send(newCar)
    .end((err, response) => {
      newCar._id = response.body._id
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "object"', (done) => {
    chai.request(app)
    .post('/cars')
    .send(newCar)
    .end((err, response) => {
      newCar._id = response.body._id
      response.body.should.be.an('object')
      done()
    })
  })

  it (`should return response.body.car_code = "${newCar.car_code}"`, (done) => {
    chai.request(app)
    .post('/cars')
    .send(newCar)
    .end((err, response) => {
      newCar._id = response.body._id
      response.body.car_code.should.equal(newCar.car_code)
      done()
    })
  })

})
