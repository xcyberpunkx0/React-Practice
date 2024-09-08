import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }

  return (
    <input value={email} onChange={handleChange} />
  );
}


// We use arry destructuring to create our local state varialbe email and our local setter function setEmail()
// The local variable email is assigned the current state value at index 0 from the array returned by useState()
// The local variable setEmail() is assigned a reference to the state setter function at index 1 from the array returned by useState()
// It's a convention to name the setter variable using the current state variable(in this example,email) with 'set' prepended