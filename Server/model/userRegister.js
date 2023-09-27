const mongoose = require("mongoose");



const userSchemaa = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },

  contact: {
    type: Number,
  },
});

const Candidate = mongoose.model("CANDIDATE", userSchemaa);

module.exports = Candidate;
