const express = require('express')
const { getBooks } = require('../controllers/books.controller')
const router = express.Router()

router.get('/', getBooks)

module.exports = router