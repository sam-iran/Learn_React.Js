// *******Implementation of Conditional statements using other component*******
import React from 'react'

function Fruit({name, price}) {
  return (
    // using the conditional filtering of data
    <li>{price>100 ? <h3>The price of {name} is Rs. {price}</h3>: " "}</li>
  )
}

export default Fruit