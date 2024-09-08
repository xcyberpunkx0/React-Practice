import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  // We pass a function in the call back function which uses the last value as opposed to the current value of the state  
  // let increment = (increment) => {
  // return increment + 1
  // };
  const increment = () => setCount(prevCount => prevCount + 1); // callback func
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}