//router from express

const {auth} = require('../Middleware/authMiddleware');

const { getBorrowings ,createBorrowing, updateBorrowing, deleteBorrowing, getBorrowing } = require('../controllers/borrowingController');

const router = require('express').Router();

router.get('/', auth, getBorrowings)
router.get('/:id',  getBorrowing)
router.post('/', auth, createBorrowing)
router.put('/:id', auth, updateBorrowing)
router.delete('/:id', auth, deleteBorrowing)

  
//export router
module.exports = router;