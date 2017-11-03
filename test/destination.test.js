const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const Destination = require('../models/Destination')

chai.use(chaiHttp)

var newDestination = {
  destination_code: 'd0001',
  list_of_destination: ['blok_m','monas']
}

var newDestination2 = {
  destination_code: 'd0002',
  list_of_destination: ['mangga_dua','lebak_bulus']
}

describe('TESTING CREATE DESTINATION: ', () => {

  afterEach(done => {
    Destination.remove({_id: newDestination._id})
      .then(response => {

        Destination.remove({_id: newDestination._id})
          .then(() => done())
          .catch(err2 => console.log(err2))

      })
      .catch(err => console.log(err))
  })

  it ('should return response status 200', (done) => {
    chai.request(app)
    .post(`/destinations`)
    .send(newDestination)
    .end((err, response) => {
      newDestination._id = response.body._id
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "object"', (done) => {
    chai.request(app)
    .post('/destinations')
    .send(newDestination)
    .end((err, response) => {
      newDestination._id = response.body._id
      response.body.should.be.an('object')
      done()
    })
  })

  it (`should return response.body.destination_code = "${newDestination.destination_code}"`, (done) => {
    chai.request(app)
    .post('/destinations')
    .send(newDestination)
    .end((err, response) => {
      newDestination._id = response.body._id
      response.body.destination_code.should.equal(newDestination.destination_code)
      done()
    })
  })

  // it (`should return response.body.destination = "${newDestination.destination}"`, (done) => {
  //   chai.request(app)
  //   .post('/destinations')
  //   .send(newDestination)
  //   .end((err, response) => {
  //     newDestination._id = response.body._id
  //     response.body.destination.should.equal(newDestination.destination)
  //     done()
  //   })
  // })

})






describe('TESTING DELETE DESTINATION: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
    .then(response => {
      newDestination._id = response._id
      done()
    })
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .delete(`/destinations/${newDestination._id}`)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('expect response2.body to not have property "destination_code"', (done) => {
    chai.request(app)
    .delete(`/destinations/${newDestination._id}`)
    .end((err, response) => {

      chai.request(app)
      .get(`/destinations/${newDestination._id}`)
      .end((err2, response2) => {
        expect(response2.body).to.not.have.property('destination_code');
        done()
      })

    })
  })

  it ('expect response2.body to not have property "list_of_destination"', (done) => {
    chai.request(app)
    .delete(`/destinations/${newDestination._id}`)
    .end((err, response) => {

      chai.request(app)
      .get(`/destinations/${newDestination._id}`)
      .end((err2, response2) => {
        expect(response2.body).to.not.have.property('list_of_destination');
        done()
      })

    })
  })

})





describe('TESTING GET ALL DESTINATIONS: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
    .then(response => {
      newDestination._id = response._id

      Destination.create(newDestination2)
      .then(response2 => {
        newDestination2._id = response2._id
        done()
      })
      .catch(err2 => console.log(err2))

    })
    .catch(err => console.log(err))
  })

  afterEach(done => {
    Destination.remove({
      _id: newDestination._id
    })
    .then(response => {

      Destination.remove({
        _id: newDestination2._id
      })
      .then(response2 => done())
      .catch(err2 => console.log(err2))

    })
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .get('/destinations')
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "array"', (done) => {
    chai.request(app)
    .get('/destinations')
    .end((err, response) => {
      response.body.should.be.an('array')
      done()
    })
  })

  it (`should return response.body[0].destination_code = ${newDestination.destination_code}`, (done) => {
    chai.request(app)
    .get('/destinations')
    .end((err, response) => {
      response.body[0].destination_code.should.equal(newDestination.destination_code)
      done()
    })
  })

  // it (`should return response.body[0].list_of_destination = ${newDestination.list_of_destination}`, (done) => {
  //   chai.request(app)
  //   .get('/destinations')
  //   .end((err, response) => {
  //     response.body[0].list_of_destination.should.equal(newDestination.list_of_destination)
  //     done()
  //   })
  // })

  it (`should return response.body[1].destination_code = ${newDestination2.destination_code}`, (done) => {
    chai.request(app)
    .get('/destinations')
    .end((err, response) => {
      response.body[1].destination_code.should.equal(newDestination2.destination_code)
      done()
    })
  })

})





describe('TESTING GET ONE DESTINATION: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
    .then(response => {
      newDestination._id = response._id
      done()
    })
    .catch(err => console.log(err))
  })

  afterEach(done => {
    Destination.remove({
      _id: newDestination._id
    })
    .then(response => done())
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    chai.request(app)
    .get(`/destinations/${newDestination._id}`)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it ('should return response.body as an "object"', (done) => {
    chai.request(app)
    .get(`/destinations/${newDestination._id}`)
    .end((err, response) => {
      response.body.should.be.an('object')
      done()
    })
  })

  it (`should return response.body.destination_code = ${newDestination.destination_code}`, (done) => {
    chai.request(app)
    .get(`/destinations/${newDestination._id}`)
    .end((err, response) => {
      response.body.destination_code.should.equal(newDestination.destination_code)
      done()
    })
  })

})





describe('TESTING UPDATE DESTINATION: ', () => {

  beforeEach(done => {
    Destination.create(newDestination)
    .then(response => {
      newDestination._id = response._id
      done()
    })
    .catch(err => console.log(err))
  })

  afterEach(done => {
    Destination.remove({
      _id: newDestination._id
    })
    .then(response => done())
    .catch(err => console.log(err))
  })

  it ('should return response status = 200', (done) => {
    delete newDestination2._id
    chai.request(app)
    .put(`/destinations/${newDestination._id}`)
    .send(newDestination2)
    .end((err, response) => {
      response.status.should.equal(200)
      done()
    })
  })

  it (`should return response2.body.destination_code = "${newDestination2.destination_code}"`, (done) => {
    delete newDestination2._id
    chai.request(app)
    .put(`/destinations/${newDestination._id}`)
    .send(newDestination2)
    .end((err, response) => {

      chai.request(app)
      .get(`/destinations/${newDestination._id}`)
      .end((err2, response2) => {
        response2.body.destination_code.should.equal(newDestination2.destination_code)
        done()
      })

    })
  })

})
