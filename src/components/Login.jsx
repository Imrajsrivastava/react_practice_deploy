import React, { useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {signupAction} from "../redux/action";

export const Login = () => {
  const [formdata, setFormdata] = useState({
  
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  

  const handleForm = async(e) => {
    e.preventDefault();

  let useradata = await  axios(`https://jsonserver-208u.onrender.com/users?email=${formdata.email}&password=${formdata.password}`);
    console.log(useradata.data);
    if(useradata.data[0]){

      dispatch(signupAction(useradata.data[0]))
    }
   

  };

  return (
    <div>
      <form onSubmit={handleForm}>
        
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

