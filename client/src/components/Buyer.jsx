import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Buyer = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/buyer")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  // Function to handle the search input change
  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  

  const filterItems = users.filter(
    (item) =>
      (item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
      (item.isbn && item.isbn.toString().includes(search))
  );


  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handleSearchInputChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Authors</th>
            <th>ISBN</th>
            <th>Price</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterItems.map((item) => (
            <tr key={item.id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.authors}</td>
              <td>{item.isbn}</td>
              <td>{item.price + item.price * 0.1}</td>
              <td>{item.contact}</td>
              <td>
                

                {/* <Link to={`/buy/${item._id}`}> */}
                <Link to="/register">
                  <button>Buy</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buyer;
