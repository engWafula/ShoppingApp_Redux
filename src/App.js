import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector} from 'react-redux'

function App() {

  const {isLogedIn}=useSelector((state)=>state.auth)
  
  return (
    <div className="App">
     {!isLogedIn && <Auth />}
      {isLogedIn && <Layout />} 
    </div>
  );
}

export default App;
