const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
 
try {
    const books = await Book.find();

    if(!books){
        res.status(400);
        throw new Error("no books found");
    }
    return res.status(200).json(books);
} catch (error) {
next(error);
}

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
    return res.json(book)
  } catch (error) {
    next(error);

    console.log(error.message);
  }
};


//get single book
const getBook = async (req, res, next) => {
    try {

        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(400);
            throw new Error("no book found");
        }
        
        return res.status(200).json(book);
    } catch (error) {
        next(error);
    }
}

//update book
const updateBook = async (req, res, next) => {
    try {
       const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});

       if(!updatedBook){
        res.status(400);
        throw new Error("no book to update");
       }
       
       return res.status(200).json(updatedBook);
        
    } catch (error) {
       next(error) 
    }
}


//delete book
const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if(!book){
            res.status(400);
            throw new Error("no book to delete");
        }

        return res.status(200).json({id: req.params.id});
    } catch (error) {
        next(error);
    }
}



module.exports = { getBooks, createBook, getBook, updateBook, deleteBook };
