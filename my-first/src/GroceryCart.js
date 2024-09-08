import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
  const [cart,setCart] = useState([]);

  const addItem = (item) => {
    setCart(function(prev){
        return [item, ...prev];

    });
  };

  const removeItem = (targetIndex) => {
    setCart(function(prev){
      return prev.filter(function(item,index){
        if(index !== targetIndex){
          // include in array
          return true;
        }
        else{
          //exclude from array
          return false;
        }
      });

    });

 
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
