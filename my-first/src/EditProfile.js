import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setProfile((pValue)=>({
      ...pValue,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input
        onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}
