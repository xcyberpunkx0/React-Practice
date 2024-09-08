import React, { useState } from "react";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setProfile({
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}
