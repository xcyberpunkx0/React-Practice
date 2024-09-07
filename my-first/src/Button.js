import React from 'react';

function Button(props) {
    return (
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
}

export default Button;