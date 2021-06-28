import React from "react";
import { MyButton } from "../styled";

const ShoppingCart = (props) => {
  return (
    <MyButton>
      <h3>{props.title}</h3>
      <p>R${props.price.toFixed(2)}</p>
      <button onClick={() => props.removerFromCart(props.id)}>Remover</button>
    </MyButton>
  );
};

export default ShoppingCart;
