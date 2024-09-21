const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    default: true,
  },
  author: {
    type: String,
    default: true,
  },
  genre: {
    type: String,
    default: true,
  },
  publicationYear: {
    type: Number,
    default: true,
  },
  image: {
    type: String,
    default: true,
  },
}, {timestamps: true});


module.exports = mongoose.model('bookeeps', bookSchema)
