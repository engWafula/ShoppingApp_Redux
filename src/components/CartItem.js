import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { remove ,addToCart} from "../store/cartSlice";


const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  
  const addHandler = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p onClick={()=>dispatch(remove(id))}>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={()=>dispatch(remove(id))}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
