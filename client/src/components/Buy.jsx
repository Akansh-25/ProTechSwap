import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';


const Buy = () => {

  // const [values, setValues]= useState([])
  
  const { id } = useParams();

  const [name, setName] = useState();
  const [authors, setAuthors] = useState();
  const [isbn, setIsbn] = useState();
  const [price, setPrice] = useState();
  const [contact, setContact] = useState();
  const navigate = useNavigate();



  // const [books, setBooks]= useState([])


  // useEffect(()=>{
  //   axios.get("http://localhost:8000/buy")
  //   .then((result)=> setValues(result.data))
  //   .catch((err)=> console.log(err))
  // })

  useEffect(()=>{
    axios.get("http://localhost:8000/getUser/" +id)
    .then((result)=> {console.log(result)
          setName(result.data.name)
          setAuthors(result.data.authors);
          setIsbn(result.data.isbn);
          setPrice(result.data.price);
          setContact(result.data.contact);
          
  })
    .catch((err)=> console.log(err))
  })


  return (
    <div>
      {/* 
      {books.map((book) => (
        <div key={book.id}>
          Deliever To : {book.name}
          <br />
          Email : {book.email} <br />
          Contact: {book.contact}
        </div>
      ))}
             */}

      {/* Display the values from useState */}
      <h2>Book Details</h2>
      <p>Name: {name}</p>
      <p>Authors: {authors}</p>
      <p>ISBN: {isbn}</p>
      <p>Price: ₹{price}</p>
      <p>Contact: {contact}</p>

      <hr />
      
      {/* 
            <hr/>

      <div>
        {books.map((values) => (
          <div key={values.id}>
            Name of Book: {values.name} <br />
            Price: ₹{values.price} ❌ ₹{values.price * 0.5} 50% off
            <br />
          </div>
        ))}
      </div>
      <hr />

      <div>
        Price Details <br />
        Price <br />
        Discount
        <hr />
        Total Amount
      </div>
      <hr />

      <Link to="/buyer">
        <button>Confirm Order</button>
      </Link> */}
    </div>
  );
}

export default Buy
