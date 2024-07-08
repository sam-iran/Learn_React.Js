// *******Implementation of Conditional statements using other component*******

import React from "react";
import Fruit from "./Fruit";

function Fruits() {
    // Declairing an array with properties
  let items = [
    { name: "Apple", price: 250 },
    { name: "Orange", price: 60 },
    { name: "Pineapple", price: 85 },
    { name: "Grapes", price: 120 },
  ];
  return (
    <p>
      {items.map((item) => (
          <Fruit name={item.name} price={item.price} />   //Calling the Fruit component with prop
      ))}
    </p>
  );
}

export default Fruits;
