import React from "react";
import Cart from "./Cart";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import "./Header.css";
const Header = () => {

  const dispatch=useDispatch()
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={()=>dispatch(logout())}>Log Out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
