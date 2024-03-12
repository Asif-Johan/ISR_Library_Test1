//router from express
const { getBorrowings ,createBorrowing, updateBorrowing } = require('../controllers/borrowingController');

const router = require('express').Router();

router.get('/', getBorrowings)
router.post('/', createBorrowing)
router.put('/:id', updateBorrowing)

//export router
module.exports = router;