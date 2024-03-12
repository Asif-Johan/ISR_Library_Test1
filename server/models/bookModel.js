const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

name: {
    type: String,
    required: true
},
auther: {
    type: String,
    required: true
},
description: {
    type: String,
    required: false
},
pageNumber: {
    type: String,
    required: false
},
coverImage: {
    type: String,
    required: false
},

})

module.exports = mongoose.model('Book', bookSchema);