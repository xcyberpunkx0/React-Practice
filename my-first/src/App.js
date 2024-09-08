import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import Bool from './Bool';
import EmailTextInput from './PhoneNumber';
import PhoneNumber from './PhoneNo';

export default function App() {
 return(
  <div>
  <ColorPicker />
  <Bool />
  <EmailTextInput />
  <PhoneNumber />
  </div>
 );
}