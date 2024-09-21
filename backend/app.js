const express = require('express')
const app = express()

const mongodb = require('./config/mongoose-connection')

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('working') 
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`application load on http://localhost:${process.env.PORT}`);
})