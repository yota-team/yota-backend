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
  destination: null
}

var newCar2 = {
  car_code: 'c0002',
  destination: null
}

var newDestination = {
  destination_code: 'd0001',
  list_of_destination: ['blok_m','monas']
}

describe('TESTING CREATE CAR: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
      .then(response => {
        newDestination._id = response._id
        newCar.destination = newDestination._id
        newCar2.destination = newDestination._id
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

  // it (`should return response.body.destination = "${newCar.destination}"`, (done) => {
  //   chai.request(app)
  //   .post('/cars')
  //   .send(newCar)
  //   .end((err, response) => {
  //     newCar._id = response.body._id
  //     response.body.destination.should.equal(newCar.destination)
  //     done()
  //   })
  // })

})






describe('TESTING DELETE CAR: ', () => {

  beforeEach(done => {
    Car.create(newCar)
    .then(response => {
      newCar._id = response._id
      done()
    })
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .delete(`/cars/${newCar._id}`)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('expect response2.body to not have property "car_code"', (done) => {
    chai.request(app)
    .delete(`/cars/${newCar._id}`)
    .end((err, response) => {

      chai.request(app)
      .get(`/cars/${newCar._id}`)
      .end((err2, response2) => {
        expect(response2.body).to.not.have.property('car_code');
        done()
      })

    })
  })

  it ('expect response2.body to not have property "destination"', (done) => {
    chai.request(app)
    .delete(`/cars/${newCar._id}`)
    .end((err, response) => {

      chai.request(app)
      .get(`/cars/${newCar._id}`)
      .end((err2, response2) => {
        expect(response2.body).to.not.have.property('destination');
        done()
      })

    })
  })

})





describe('TESTING GET ALL CARS: ', () => {

  beforeEach(done => {
    Car.create(newCar)
    .then(response => {
      newCar._id = response._id

      Car.create(newCar2)
      .then(response2 => {
        newCar2._id = response2._id
        done()
      })
      .catch(err2 => console.log(err2))

    })
    .catch(err => console.log(err))
  })

  afterEach(done => {
    Car.remove({
      _id: newCar._id
    })
    .then(response => {

      Car.remove({
        _id: newCar2._id
      })
      .then(response2 => done())
      .catch(err2 => console.log(err2))

    })
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .get('/cars')
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "array"', (done) => {
    chai.request(app)
    .get('/cars')
    .end((err, response) => {
      response.body.should.be.an('array')
      done()
    })
  })

  it (`should return response.body[0].car_code = ${newCar.car_code}`, (done) => {
    chai.request(app)
    .get('/cars')
    .end((err, response) => {
      response.body[0].car_code.should.equal(newCar.car_code)
      done()
    })
  })

  it (`should return response.body[1].car_code = ${newCar2.car_code}`, (done) => {
    chai.request(app)
    .get('/cars')
    .end((err, response) => {
      response.body[1].car_code.should.equal(newCar2.car_code)
      done()
    })
  })

})





describe('TESTING GET ONE CAR: ', () => {

  beforeEach(done => {
    Car.create(newCar)
    .then(response => {
      newCar._id = response._id
      done()
    })
    .catch(err => console.log(err))
  })

  afterEach(done => {
    Car.remove({
      _id: newCar._id
    })
    .then(response => done())
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .get(`/cars/${newCar._id}`)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "object"', (done) => {
    chai.request(app)
    .get(`/cars/${newCar._id}`)
    .end((err, response) => {
      response.body.should.be.an('object')
      done()
    })
  })

  it (`should return response.body.car_code = ${newCar.car_code}`, (done) => {
    chai.request(app)
    .get(`/cars/${newCar._id}`)
    .end((err, response) => {
      response.body.car_code.should.equal(newCar.car_code)
      done()
    })
  })

  it (`should return response.body.car_code = ${newCar.car_code}`, (done) => {
    chai.request(app)
    .get(`/cars/${newCar._id}`)
    .end((err, response) => {
      response.body.car_code.should.equal(newCar.car_code)
      done()
    })
  })

})





describe('TESTING UPDATE CAR: ', () => {

  beforeEach(done => {
    Car.create(newCar)
    .then(response => {
      newCar._id = response._id
      done()
    })
    .catch(err => console.log(err))
  })

  afterEach(done => {
    Car.remove({
      _id: newCar._id
    })
    .then(response => done())
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    delete newCar2._id
    chai.request(app)
    .put(`/cars/${newCar._id}`)
    .send(newCar2)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it (`should return response2.body.car_code = "${newCar2.car_code}"`, (done) => {
    delete newCar2._id
    chai.request(app)
    .put(`/cars/${newCar._id}`)
    .send(newCar2)
    .end((err, response) => {

      chai.request(app)
      .get(`/cars/${newCar._id}`)
      .end((err2, response2) => {
        response2.body.car_code.should.equal(newCar2.car_code)
        done()
      })

    })
  })

})
