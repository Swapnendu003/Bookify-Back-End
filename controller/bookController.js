const { Book } = require("../models/bookDetails");
const ErrorResponse = require("../utils/errorResponse");


const addBookDetails = async (req, res, next) => {
  try {
    const { name, author, image, price, description, tags, genre } = req.body;
    if (!name) {
      /*return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter title",
      });*/
      return next(new ErrorResponse("Please enter title", 400));
    } else if (!author) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Author Name",
      });
    } else if (!image) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter correct image URL",
      });
    } else if (!price) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter price",
      });
    }
    else if (!description) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Description",
      });
    }
    else if (!tags) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Tags",
      });
    }
    else if (!genre) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter genre",
      });
    }
    const newBook = await Book.create({
      name: name,
      author: author,
      image: image,
      price: price,
      description: description,
      tags: tags,
      genre: genre
    });
    res.status(200).json({ success: true, statusCode: 200, data: newBook });
  } catch (error) {
    console.error("Error while adding book details:", error);
    res.status(400).json({ success: false, statusCode: 400, msg: "An error occurred while adding the book details." });
  }
  
};
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json({ success: true, statusCode: 200, data: allBooks });
  } catch (error) {
    console.error("Error while fetching all books:", error);
    res.status(500).json({ success: false, statusCode: 500, msg: "An error occurred while fetching all books." });
  }
};
const getBooksByGenre = async (req, res) => {
  try {
    const genre = req.params.genre;
    const booksByGenre = await Book.find({ genre: genre });
    res.status(200).json({ success: true, statusCode: 200, data: booksByGenre });
  } catch (error) {
    console.error("Error while fetching books by genre:", error);
    res.status(500).json({ success: false, statusCode: 500, msg: "An error occurred while fetching books by genre." });
  }
};

const getBook = async (req, res) => {
  const book_id = req.query.book_id;
  if (!book_id) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      msg: "Please enter correct book id",
    });
  }

  const book = await Book.findOne({ _id: book_id });
  if (!book) { // Corrected the condition to check for the existence of 'book'
    return res.status(400).json({
      success: false,
      statusCode: 400,
      msg: "Book does not exist. Please enter correct book id",
    });
  }

  const temp = { ...book._doc };
  delete temp.__v;
  console.log(temp);

  res.status(200).json({ success: true, statusCode: 200, data: temp });
};

module.exports = { addBookDetails, getAllBooks, getBooksByGenre, getBook};
