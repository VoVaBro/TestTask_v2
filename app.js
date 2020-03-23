const express = require('express');
const app = express();
const path = require('path')
const config = require('config')

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

http.Server(app).listen(PORT, console.log('server start on port 5000'));