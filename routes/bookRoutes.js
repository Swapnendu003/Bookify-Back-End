const express = require('express');
const { addBookDetails, getAllBooks, getBooksByGenre, getBook } = require('../controller/bookController');

const bookRouter = express.Router();
bookRouter.post('/add', addBookDetails);
bookRouter.get('/get/all', getAllBooks);
bookRouter.get('/get/genre/:genre', getBooksByGenre);
bookRouter.get ('/get', getBook);
module.exports = bookRouter;
