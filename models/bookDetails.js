var mongoose = require ('mongoose');
const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tags:{
        type: [String],
        required: true
    },
    genre:{
        type: String,
        required: true
    }
}
);

module.exports = {
    Book: mongoose.model("Book", bookSchema, "books"),
  };