const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')

app.get('/', (req, res) => {
  // res.send("Hello World!")
  res.sendFile('/index.html', { root: path.dirname(__dirname + "/code") })
})

http.listen(3000, () => {
  console.log('listening on port 3000')
})