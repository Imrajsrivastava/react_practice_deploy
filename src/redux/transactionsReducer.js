const initialData = {
  transactions:[]
}

const transactionsReducer = (state=initialData,action)=>{
      if(action.type =="TRANSACTIONS_SUCCESS"){
        return {
          ...state,
          transactions:[...state.transactions,action.payload]
        }
      }else if(action.type == "GETDATA_TRANSACTIONS"){
        return{ 
          ...state,
          transactions:action.payload
        };
          
        
      }else if(action.type =="EDITDATA_TRANSACTIONS"){
        console.log(action.payload)
       
        const updatedUsers = state.transactions.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        );
        return {
          ...state,
          transactions: updatedUsers,
        };
      }

      return state
}


export default transactionsReducer;