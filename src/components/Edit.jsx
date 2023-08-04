import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  Input
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { transactionsEditAction } from '../redux/action';

export const Edit = () => {
  const {id} = useParams()
  const [formdata, setFormdata] = useState({});
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactionsReducer);
  console.log(transactions)

  const getData = async()=>{
    let useradata = await  axios(`https://jsonserver-208u.onrender.com/transactions/${id}`);
    console.log(useradata.data);
    setFormdata(useradata.data);
    

  
  }
  useEffect(()=>{
getData()
  },[])


  const handleForm = async(id,e)=>{
    e.preventDefault()

    const editItem =await axios.put(`https://jsonserver-208u.onrender.com/transactions/${id}`,formdata);
    console.log(editItem)
    dispatch(transactionsEditAction(editItem.data))

  }

  return (
    <div>
      <h1>Edit Page</h1>

      <div>
        {/* //form here  */}

        <form onSubmit={(e)=>{handleForm(id,e)}}>
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
  )
}
