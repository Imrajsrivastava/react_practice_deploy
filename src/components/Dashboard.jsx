import React, { useState,useEffect } from 'react'
import { Tracker } from './Tracker';
import { Analytics } from './Analytics';
import { History } from './History';
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import { transactionsGetAction } from '../redux/action'

export const Dashboard = () => {
  const [activebtn,setActivebtn] = useState("Tracker");
  const dispatch = useDispatch()
  const getData = async()=>{
    let useradata = await  axios(`https://jsonserver-208u.onrender.com/transactions`);
    console.log(useradata.data);
    dispatch(transactionsGetAction(useradata.data))
  }
  useEffect(()=>{
getData()
  },[])
  return (
    <>
    <div>
      <button onClick={()=>{setActivebtn("Tracker")}}>Tracker</button>
      <button onClick={()=>{setActivebtn("Analytics")}}>Analytics</button>
      <button onClick={()=>{setActivebtn("History")}}>History</button>
    </div>

    {activebtn == "Tracker" && <Tracker/>}
    {activebtn == "Analytics" && <Analytics/>}
    {activebtn == "History" && <History/>}

    </>
  )
}
