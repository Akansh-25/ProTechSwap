const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");

require("./db/conn")
require("./db/conregister")
const User = require("./model/userSchema")
const Candidate = require("./model/userRegister")


const app = express();
app.use(cors());
const port = 8000 || process.env.PORT;

app.use(express.json());


app.get("/buyer",(req,res)=>{
  User.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})



app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;

  User.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});




app.get("/buy",(req,res)=>{
  Candidate.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})



app.post("/createUser", (req, res) => {
  User.create(req.body)
  .then(users=>res.json(users))
  .catch(err => res.json(err))
});

app.post("/registration", (req, res) => {
  Candidate.create(req.body)
    .then((results) => res.json(results))
    .catch((err) => res.json(err));
});


app.listen(port, () => {
  console.log(`server is working on ${port}`);
});
