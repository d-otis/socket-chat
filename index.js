const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')

app.get('/', (req, res) => {
  res.send("Hello World!")
})

http.listen(3000, () => {
  console.log('listening on port 3000')
})