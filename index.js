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
const bookRouter = require ("./routes/bookRoutes")
app.use('/books', bookRouter)

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo yo");
});

mongoose
  .connect(
    "mongodb+srv://swapsb003:Swapno2003@cluster0.8jg2plo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.port || 3000, () => {
      console.log("Your Server is running");
    });
  })
  .catch((error)=>{
    console.log("error");
  });*/

const express = require("express");
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
  });
