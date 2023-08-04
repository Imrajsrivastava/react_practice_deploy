import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { transactionsGetAction } from '../redux/action';

export const History = () => {
  const [filterdata,setFilterdata] = useState("All");
  const [sortOrder, setSortOrder] = useState('Ascending');

  
  const transactions = useSelector((state) => state.transactionsReducer.transactions);
  console.log(transactions)
  const dispatch = useDispatch()

const handleFilterChange = (v)=>{
  setFilterdata(v)

}

const handleSortChange = (e) => {
  setSortOrder(e.target.value);
};


const filteredTransactions = filterdata === 'All' ? transactions : transactions.filter((t) => t.type == filterdata);
console.log(filterdata)
console.log(filteredTransactions)

const sortedTransactions =
sortOrder === 'Ascending'
  ? filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date))
  : filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));


  const handleDelete = async(id)=>{
const deleteItem = await axios.delete(`https://jsonserver-208u.onrender.com/transactions/${id}`)
console.log(deleteItem);
const updatedata = transactions.filter((el)=>el.id !==id);
dispatch(transactionsGetAction(updatedata));

  }
  return (
    <div>

<select id="filter" value={filterdata} onChange={(e)=>{handleFilterChange(e.target.value)}}>
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <select id="sort" value={sortOrder} onChange={handleSortChange}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      {
        sortedTransactions.map((el,i)=>{
          return <div style={{border:"2px solid black",width:"500px"}} >
            <h4>{el.category}</h4>
            <h4>{el.type}</h4>
            <p>{el.date}</p>
            <p>{el.rupee}</p>
            <Link to={`/edit/${el.id}`}>
            <button >edit</button>
            </Link>
            <button onClick={()=>{handleDelete(el.id)}}>delete</button>
          </div>
        })
      }
    </div>
  )
}
