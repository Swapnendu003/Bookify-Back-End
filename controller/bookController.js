const { Book } = require("../models/bookDetails");

const addBookDetails = async (req, res) => {
  try {
    const { name, author, image, price } = req.body;
    if (name === undefined || name === null || name === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter title",
      });
    } else if (author === undefined || author === null || author === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter Author Name",
      });
    } else if (image === undefined || image === null || image === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter correct image URL",
      });
    } else if (price === undefined || price === null || price === "") {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        msg: "Please enter price",
      });
    }
    const newBook = await Book.create({
      name: name,
      author: author,
      image: image,
      price: price,
    });
    res.status(200).json({ success: true, statusCode: 200, data: temp });
  } catch (error) {
    res.status(400).json({ success: false, statusCode: 400, msg: error });
  }
};

module.exports = {addBookDetails};