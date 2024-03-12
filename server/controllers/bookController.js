const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  return res.json({ message: "get all Books new" });
};

//create book

const createBook = async (req, res, next) => {
  try {
    //validate from user
    const book = await Book.create(req.body);

    if (!book) {
      res.status(400);
      throw new Error("problem with creating book"); 
    }
  } catch (error) {
    next(error);

    console.log(error.message);
  }
};

module.exports = { getBooks, createBook };
