// **This Component is used show the rendering of Array and Object**

// ***************Simple Array Rendering***************

// function Cars() {
//   //Declaring an Array
//   const cars = ["Volvo", "Swift", "Nissan", "Audi"];
//   return(
//     <div>{cars.map(car =>(<h1>{car}</h1>))}</div>
//   );
// }

// ***************Array Rendering with Props***************
function Cars() {
  //Declaring an Array with props
  const cars = [
    {name:"Volvo", price:420000},
    {name:"Swift", price:225000},
    {name:"Nissan", price:120000},
    {name:"Audi", price:525000}
  ];
  return (
    <ul>
      {cars.map((car) => (
        <li>{car.name} - {car.price}</li>
      ))}
    </ul>
  );
}

export default Cars;
