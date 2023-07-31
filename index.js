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
  });
