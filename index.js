const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
app.use(express.json())
app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'Ganesh' && password === 'Ganesh') {
    res.status(200).send({ message: 'Logged in successfully!' })
  } else {
    res.status(400).send({ message: 'Login failed! Please try again!' })
  }
})

server.listen(3000, () => console.log('Server started at port: 3000'))
module.exports = server
