const initialData = {
  isLogin:false,
  user:null
}

const signupReducer = (state = initialData,action)=>{

  if(action.type == "SIGNUPSUCCESS"){
    return{
      ...state,
      user:action.payload,
      isLogin:true
    }
  }

  return state;



}

export default signupReducer;