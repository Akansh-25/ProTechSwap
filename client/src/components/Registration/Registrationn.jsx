import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();


  const [users, setUsers] = useState([])
  
  
  // useEffect(() => {
  //   axios
  //   .get("http://localhost:8000/buyer")
  //   .then((result) => setUsers(result.data))
  //   .catch((err) => console.log(err));
  // }, []);


  
  //  const handlebuy=()=>{
  //     {
  //       users.map((user)=>(
  //           navigate(`/buy/${result.data._id}`);
  //       ))
  //     }
       
  //  }




  const submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/registration",{name,email,contact})
    .then(result=> console.log(result),
       
    )
    .catch(err=> console.log(err))

  }

  

  return (
    <div>
      <form onSubmit={submit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contact</label>
        <input
          type="number"
          placeholder="Contact"
          onChange={(e) => setContact(e.target.value)}
        />

        {/* <button type="submit"
           onClick={()=>{handlebuy()}}
          >Register</button>  */}

        {users.map((user) => (
          <Link to={`/buy/${user._id}`}>
            <button>Register</button>
          </Link>
        ))}

      </form>
    </div>
  );
};

export default Registration;
