const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  authors: {
    type: String,
   
  },
  isbn: {
    type: Number,
   
  },
  price: {
    type: Number,
   
  },
  contact: {
    type: Number,
    
  }
  
});


const User = mongoose.model("USER", userSchema);

module.exports = User;


