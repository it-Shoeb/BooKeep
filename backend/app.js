const express = require('express')
const app = express()

const flash = require('connect-flash')
const session = require('express-session')
const cors = require('cors')

require('dotenv').config()

const MongoDB = require('./config/mongoose-connection')

const booksRoute = require('./routes/booksRoute')

app.use(express.json())
app.use(flash())
app.use(cors())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use('/api/books', booksRoute)

app.get('/', (req, res) => {
    res.send('working') 
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`application running on http://localhost:${PORT}`);
})