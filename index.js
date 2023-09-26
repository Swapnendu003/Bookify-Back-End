const express = require("express");
const app = express();
const cors = require("cors");
//const mongoose = require("mongoose");
const connectDatabase = require("./config/database");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const bookRouter = require ("./routes/bookRoutes")
app.use('/books', bookRouter)

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo yo");
});
connectDatabase();
app.listen(process.env.PORT || 3000, () => {
  console.log("Your Server is running");
});

/*const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const bookRouter = require("./routes/bookRoutes");
app.use("/books", bookRouter);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Sagnik and Swapnendu Recieved");
});

const mongooseUri = process.env.MONGO_URI; 

mongoose
  .connect(mongooseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Your Server is running");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });*/
