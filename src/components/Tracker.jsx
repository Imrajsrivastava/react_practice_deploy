import React, { useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  Input
} from "@chakra-ui/react";
import { transactionsAction } from "../redux/action";

export const Tracker = () => {
  const [formdata, setFormdata] = useState({
    type: "",
    category: "",
    date: "",
    rupee: "",
  });
  const dispatch = useDispatch()

  const state = useSelector((state)=>state)
  console.log(state)

  const handleForm = async(event) => {
    event.preventDefault();
    let useradata = await  axios.post("https://jsonserver-208u.onrender.com/transactions",formdata)
    console.log(useradata);
    dispatch(transactionsAction(useradata.data));
  

    console.log(formdata);
  };
  return (
    <div>
      <h1>Tracker Page</h1>

      <div>
        {/* //form here  */}

        <form onSubmit={handleForm}>
          <FormControl>
            <Select
              placeholder="Select Type"
              value={formdata.type}
              onChange={(e) => {
                setFormdata({ ...formdata, type: e.target.value });
              }}
            >
              <option value={"Income"}>Income</option>
              <option value={"Expense"}>Expense</option>
            </Select>

            <Select
              placeholder={`${formdata.type}`}
              value={formdata.category}
              onChange={(e) => {
                setFormdata({ ...formdata, category: e.target.value });
              }}
            >
              {formdata.type == "Income" ? (
                <>
                  <option value={"Salary"}>Salary</option>
                  <option value={"Gifts"}>Gifts</option>
                  <option value={"Refunds"}>Refunds</option>
                  <option value={"Other"}>Other</option>
                </>
              ) : (
                <>
                  <option value={" Food & Drinks"}>Food & Drinks</option>
                  <option value={"Shopping"}>Shopping</option>
                  <option value={"Housing"}>Housing</option>
                  <option value={"Bills"}>Bills</option>
                  <option value={"Vehicle & Transport"}>
                    Vehicle & Transport
                  </option>
                  <option value={"Lifestyle"}>Lifestyle</option>
                </>
              )}
            </Select>

            <FormLabel>Date</FormLabel>
            <Input type="date"   value={formdata.date}
              onChange={(e) => {
                setFormdata({ ...formdata, date: e.target.value });
              }} />

            <FormLabel>Rupee</FormLabel>
            <Input type="number"   value={formdata.rupee}
              onChange={(e) => {
                setFormdata({ ...formdata, rupee: +e.target.value });
              }} />
            <Button mt={4} colorScheme="teal" type="submit">
              create
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
