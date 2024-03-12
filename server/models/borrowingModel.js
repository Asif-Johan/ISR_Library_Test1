//bring mongoose
const mongoose = require('mongoose');


const borrowingSchema = mongoose.Schema({

    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',

    },

    name: {
        type: String,
        required: true,
    },

    studentId: {
        type: String,
        required: true,
    }, 

    contact: {  
        type: String,
        required: true,
    },

    borrowDate: {
        type: Date,
        // default: Date.now,
        required: true,   
    }, 
    returnDate: {
        type: Date,
        required: true,
    }, 
    confirmed: {
        type: Boolean,
        default: false,
    },


},{
    timestamps: true,
}


);
module.exports = mongoose.model('Borrowing', borrowingSchema);
