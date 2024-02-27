const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT_NUMBER = 3000

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT_NUMBER)