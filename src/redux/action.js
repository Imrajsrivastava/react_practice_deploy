const signupAction = (user)=>{
  return {
    type:"SIGNUPSUCCESS",
    payload:user
  }
}






const transactionsAction =(data)=>{
  return{
    type:"TRANSACTIONS_SUCCESS",
    payload:data
  }
}

const transactionsGetAction =(data)=>{
  return{
    type:"GETDATA_TRANSACTIONS",
    payload:data
   
  }
}

const transactionsEditAction =(data)=>{
  return{
    type:"EDITDATA_TRANSACTIONS",
    payload:data
   
  }
}

export {transactionsAction ,signupAction,transactionsGetAction,transactionsEditAction}