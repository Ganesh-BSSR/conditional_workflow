const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const expect = chai.expect
chai.use(chaiHttp)

describe('Users', () => {
  it('Login test with right credentials', (done) => {
    let details = {
      username: 'Ganesh',
      password: 'Ganesh',
    }
    chai
      .request(app)
      .post('/login')
      .send(details)
      .end((err, res) => {
        if (err) {
          expect(res).to.have.status(500)
        } else {
          expect(res).to.have.status(400)
          expect(res.body)
            .to.have.property('message')
            .equal('Logged in successfully!')
        }
        done()
      })
  })

  it('Login test with invalid credentials', (done) => {
    let details = {
      username: 'Ganesh',
      password: 'Ganes',
    }
    chai
      .request(app)
      .post('/login')
      .send(details)
      .end((err, res) => {
        if (err) {
          expect(res).to.have.status(500)
        } else {
          expect(res).to.have.status(200)
          expect(res.body)
            .to.have.property('message')
            .equal('Login failed! Please try again!')
        }
        done()
      })
  })
})
