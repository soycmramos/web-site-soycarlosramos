const express = require('express')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const app = express()
require('dotenv').config()

// settings
app.set('port', process.env.PORT || 5000)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
	secret: 'session-secret',
	saveUninitialized: false,
	resave: false
}))

// routes
app.use(require('./routes/'))

// lintening port
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')} http://localhost:${app.get('port')}`)
})