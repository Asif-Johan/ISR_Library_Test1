//bring mongoose
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: false,
    },

    studentId: {
        type: String,
        required: true,
    }, 

    contact: {  
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        default: true,
        required: false,
    }






},{
    timestamps: true
}

)


module.exports = mongoose.model("User", userSchema)
