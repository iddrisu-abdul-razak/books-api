const books=require("../books")


//get all books
const getBooks=(re, res) =>{
    res.status(200).json(books);
}
module.exports={getBooks}
  