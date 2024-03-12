const Borrowing = require('../models/borrowingModel');


//get Borrowing
const getBorrowings = async (req, res, next) => {
   try {
    const borrowings = await Borrowing.find();

    if (!borrowings) {
        res.status(400);
        throw new Error('Borrowings not found');
    
    }
    
    return res.status(200).json(borrowings);
   } catch (error) {
    next(error);
   }
};



//create borrowing 
const createBorrowing = async (req, res, next) => {
    try {
        
        const borrowing = await Borrowing.create(req.body);

    if(!borrowing) {
        res.status(400);
        throw new Error('Borrowing not created');
    }    

    return res.status(201).json(borrowing);
        
    } catch (error) {
        next(error)
    }
}


//update borrowing
const updateBorrowing = async (req, res, next) => {
    try {
        const updateBorrowing = await Borrowing.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        });

        if(!updateBorrowing) {
            res.status(400);
            throw new Error('Borrowing not updated');
        }
        const borrowings = await Borrowing.find();

        return res.status(200).json(borrowings);

    } catch (error) {
        next(error);
    }
}


module.exports = {
    getBorrowings,
    createBorrowing,
    updateBorrowing,

}