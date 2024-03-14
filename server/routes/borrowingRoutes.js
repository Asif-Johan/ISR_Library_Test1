//router from express
const { getBorrowings ,createBorrowing, updateBorrowing, deleteBorrowing, getBorrowing } = require('../controllers/borrowingController');

const router = require('express').Router();

router.get('/', getBorrowings)
router.get('/:id', getBorrowing)
router.post('/', createBorrowing)
router.put('/:id', updateBorrowing)
router.delete('/:id', deleteBorrowing)

  
//export router
module.exports = router;