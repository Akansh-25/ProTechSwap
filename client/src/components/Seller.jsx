import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Seller = () => {

  const [name , setName]= useState()
  const [authors , setAuthors]= useState()
  const [isbn , setIsbn]= useState()
  const [price , setPrice]= useState()
  const [contact , setContact]= useState()
  
  const navigate = useNavigate()

  const submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/createUser",{name,authors,isbn,price,contact})
    .then(result=> console.log(result),
        navigate("/buyer")
    )
    .catch(err=> console.log(err))

  }

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add Book</h2>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Author: </label>
          <input
            type="text"
            placeholder="Enter Author"
            onChange={(e) => setAuthors(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">ISBN: </label>
          <input
            type="number"
            placeholder="Enter ISBN"
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Price: </label>
          <input
            type="number"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Contact: </label>
          <input
            type="text"
            placeholder="Enter Contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Seller
