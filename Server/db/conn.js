const { default: mongoose } = require("mongoose");


const DB =
  "mongodb+srv://akansh:akansh@cluster0.n5ainln.mongodb.net/BookStore?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("not successfull");
  });
