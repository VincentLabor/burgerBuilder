import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Button from '../UI/Buttons/Button';

const orderSummary = props => {
  //A real function body should indicate that there will be some logic to be written.

  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key = {igKey} >
        <span style={{ textTransform: "capitalize" }}>{igKey} </span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>Your delicious Burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType = "Danger" clicked = {props.cancelled} >Cancel</Button>
      <Button btnType = "Success" clicked = {props.continue} >Continue</Button>
    </Auxiliary>
  );
};

export default orderSummary;