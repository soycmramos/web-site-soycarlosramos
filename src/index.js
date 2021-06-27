const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

// settings
app.set('port', process.env.PORT || 5000)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes/'))

// lintening port
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})