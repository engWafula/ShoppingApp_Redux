import React,{useEffect} from "react";
import "./Cart.css";
import { useSelector,useDispatch } from "react-redux";
import { showCart } from "../store/cartSlice";
const Cart = () => {
  const {totalQuantity}=useSelector(state=>state.cart)
  const dispatch=useDispatch()
 
  return (
    <div className="cartIcon">
      <h3 onClick={()=>dispatch(showCart())}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
