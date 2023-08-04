import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie ,Doughnut} from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const Analytics = () => {
  const transactions = useSelector((state) => state.transactionsReducer.transactions);

  // Calculate income data for each category
  const Incomedata = transactions.filter((el) => el.type === 'Income');
  
  const salaryIncome = Incomedata.filter((el) => el.category === 'Salary').reduce((ac, curr) => ac + Number(curr.rupee), 0);
  const giftsIncome = Incomedata.filter((el) => el.category === 'Gifts').reduce((ac, curr) => ac + Number(curr.rupee), 0);
  const refundsIncome = Incomedata.filter((el) => el.category === 'Refunds').reduce((ac, curr) => ac + Number(curr.rupee), 0);
  const otherIncome = Incomedata.filter((el) => el.category === 'Other').reduce((ac, curr) => ac + Number(curr.rupee), 0);

  const incomeData = {
    labels: ['Salary', 'Gifts', 'Refunds', 'Other'],
    datasets: [
      {
        data: [salaryIncome, giftsIncome, refundsIncome, otherIncome],
        backgroundColor: ['#4CAF50', '#9C27B0', '#03A9F4', '#FF9800'],
      },
    ],
  };


  const expensedata = transactions.filter((el)=>el.type=="Expense");

  const foodExp = expensedata.filter((el)=>el.category=="Food & Drinks").reduce((ac,curr)=>ac+Number(curr.rupee),0)
  const shopExp = expensedata.filter((el)=>el.category=="Shopping").reduce((ac,curr)=>ac+Number(curr.rupee),0)
  const houseExp = expensedata.filter((el)=>el.category=="Housing").reduce((ac,curr)=>ac+Number(curr.rupee),0)
  const billExp = expensedata.filter((el)=>el.category=="Bills").reduce((ac,curr)=>ac+Number(curr.rupee),0)
  const vtExp  = expensedata.filter((el)=>el.category=="Vehicle & Transport").reduce((ac,curr)=>ac+Number(curr.rupee),0)
  const lifeExp = expensedata.filter((el)=>el.category=="Lifestyle").reduce((ac,curr)=>ac+Number(curr.rupee),0)
 

  const expenceData = {
    labels: ['Food & Drinks', 'Shopping', 'Housing', 'Bills', 'Vehicle & Transport', 'Lifestyle'],
    datasets:[
      {
        data:[foodExp,shopExp,houseExp,billExp,vtExp,lifeExp],
        backgroundColor: ['#4CAF50', '#9C27B0', '#03A9F4', '#FF9800'],

      }
    ]
  }


  return (
    <>
      <div>Analytics</div>

      <h2>Income Chart</h2>
      <Pie data={incomeData} />
      <Doughnut data={expenceData} />
    </>
  );
};
