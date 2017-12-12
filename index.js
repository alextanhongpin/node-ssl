const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true
  })
})
https.createServer(options, app).listen(3000, () => {
  console.log('started')
})
