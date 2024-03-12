const getBooks = require('../controllers/bookController').getBooks;

const createBook = require('../controllers/bookController').createBook;

const getBook = require('../controllers/bookController').getBook;

const updateBook  = require('../controllers/bookController').updateBook;

const deleteBook = require('../controllers/bookController').deleteBook;

const express = require('express');
const router = express.Router();



//get all books
router.get('/', getBooks)


//create room
router.post('/', createBook);

//get single room
router.get('/:id', getBook);

//update room
router.put('/:id', updateBook);

//delete room
router.delete('/:id', deleteBook);

module.exports = router;