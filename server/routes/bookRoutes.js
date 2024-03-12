const getBooks = require('../controllers/bookController').getBooks;

const createBook = require('../controllers/bookController').createBook;


const express = require('express');
const router = express.Router();



//get all books
router.get('/', getBooks)


//create room
router.post('/', createBook);

module.exports = router;