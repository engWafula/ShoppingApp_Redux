import React,{useEffect}from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector,useDispatch} from 'react-redux'
import Nortifications from "./components/Nortifications";
import { showNotification } from "./store/notificationSlice";

let firstRender=true
function App() {

  const {isLogedIn}=useSelector((state)=>state.auth)
  const cart =useSelector(state=>state.cart)

  const {show}=useSelector(state=>state.notification)

  const dispatch=useDispatch()
   
useEffect(()=>{

  if(firstRender){
   firstRender=false
   return
  }
  const sendData=async()=>{

    dispatch(showNotification({
      open:true,
      message:"Send Request",
      type:'warning'

    }))
    const response=await fetch('https://redux-23e80-default-rtdb.firebaseio.com/cartItems.json',{

    method:'PUT',
    body:JSON.stringify(cart)
  }
    )
    const data=await response.json()
    dispatch(showNotification({
      open:true,
      message:"Data Send Successfully",
      type:'success'
    }))
  }
  sendData().catch(err=>{
    dispatch(showNotification({
      open:true,
      message:"Data Send Failed",
      type:'failed'
    }))
  })
},[cart])

  
  return (
    <div className="App">
      {show && <Nortifications type={show.type} message={show.message}/>}
     {!isLogedIn && <Auth />}
      {isLogedIn && <Layout />} 
    </div>
  );
}

export default App;
