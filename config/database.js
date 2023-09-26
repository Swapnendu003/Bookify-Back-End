const mongoose = require('mongoose');
const dotenv = require('dotenv'); 


dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI; 

    const { connection } = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to DB ${connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
