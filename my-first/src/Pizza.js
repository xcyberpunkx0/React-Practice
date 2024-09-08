import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);



//   const toggleTopping = ({ target }) => {
//     const clickedTopping = target.value;
  
//     setSelected(function(prevSelected) {
//       let newSelected;
  
//       // Check if the clicked topping is already in the selected array
//       if (prevSelected.includes(clickedTopping)) {
//         // If it is, remove it from the array
//         newSelected = prevSelected.filter(function(topping) {
//           return topping !== clickedTopping;
//         });
//       } else {
//         // If it isn't, add it to the array
//         newSelected = [clickedTopping].concat(prevSelected);
//       }
  
//       // Return the new array to update the state
//       return newSelected;
//     });
//   };
  

  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    console.log(target); // Logs the button element
    console.log(target.value);
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Hatao ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}
