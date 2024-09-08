import React, { useState } from 'react';

export default function ColorPicker(){
    const [color, setColor] = useState("red"); //this changes the value of color, according to the onclick event.
    const divStyle = {backgroundColor: color};
    return (
      <div style={divStyle}>

      <h1>My favorite color is {color}!</h1>
        <button
        type="button"
        onClick={() => setColor("blue")}
      >
      Blue
      </button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </div>
      
    );
}