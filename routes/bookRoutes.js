const express = require ('express')
const {addBookDetails}= require ('../controller/bookController')

const bookRouter = express.Router();
bookRouter.post("/add", addBookDetails);
module.exports = bookRouter;