import React from "react";
import { useDispatch,useSelector} from "react-redux";
import "./Product.css";

import { addToCart } from "../store/cartSlice";

const Product = ({ name, id, imgURL, price }) => {

  const dispatch=useDispatch()
 
  const addItem=()=>{
    dispatch(addToCart({
      name,id,price
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addItem}>Add to cart</button>
    </div>
  );
};

export default Product;
