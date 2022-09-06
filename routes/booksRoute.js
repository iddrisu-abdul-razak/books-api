const {Router} =require("express")
const {getBooks} =require("../controllers/booksControllers")
const auth = require("../middlewares/books.auth")
const router=Router()

router.route("/books").get(auth, getBooks);
module.exports=router