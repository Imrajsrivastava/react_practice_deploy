import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const PrivateRoutes = ({children}) => {

 const isLogin =  useSelector((state)=>state.signupReducer.isLogin)
 if(isLogin){
  return children
 }else{
  return <Navigate to={"/login"}/>
 }

}
