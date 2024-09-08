import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}

Button.defaultProps = {
    text: 'Click me'
};

export default Button;