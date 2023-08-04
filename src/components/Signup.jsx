import React, { useState } from "react";
import axios from "axios"


export const Signup = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
 

 
  const handleForm = async(e) => {
    e.preventDefault();

  let useradata = await  axios.post("https://jsonserver-208u.onrender.com/users",formdata)
    console.log(useradata.data);
  


  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="username"
          value={formdata.username}
          onChange={(e) => {
            setFormdata({ ...formdata, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={formdata.email}
          onChange={(e) => {
            setFormdata({ ...formdata, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={formdata.password}
          onChange={(e) => {
            setFormdata({ ...formdata, password: e.target.value });
          }}
        />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};
