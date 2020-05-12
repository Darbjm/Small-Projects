const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const logger = require('./lib/logger')
const router = require('./config/router')
const errorHandler = require('./lib/errorHandler')

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

// set up logger middleware
app.use(logger)

// set up router middleware
app.use('/api', router)

// error handler for return the correct statuses
app.use(errorHandler)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`app is listening on port ${port}`))

module.exports = app
