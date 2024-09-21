const BookModel = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(200).json(books);
    req.flash("data retriving");
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `server error ${error.message}` });
    req.flash("error", "something went wrong");
  }
};

module.exports = { getBooks };
