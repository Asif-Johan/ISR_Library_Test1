const getBooks = async(req,res) =>{
    return res.json({message: "get all Books new"})
};

//create book

const createBook = async(req,res, next) => {
return res.json({message: "create book"})
}

module.exports = {getBooks,
    createBook,
}