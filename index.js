const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const path = require('path')

app.get('/', (req, res) => {
  // res.send("Hello World!")
  res.sendFile('/index.html', { root: path.dirname(__dirname + "/code") })
})

http.listen(3000, () => {
  console.log('listening on port 3000')
})