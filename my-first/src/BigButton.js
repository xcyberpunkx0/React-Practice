import React from 'react';
import LilButton  from './LilButton';

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button.</button>;
}

export default BigButton;

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />