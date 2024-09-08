import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import Bool from './Bool';
import EmailTextInput from './PhoneNumber';
import PhoneNumber from './PhoneNo';
import Counter from './Counter';
import PersonalPizza from './Pizza';
import GroceryCart from './GroceryCart';


export default function App() {
 return(
  <div>
  <ColorPicker />
  <hr></hr>
  <Bool />
  <hr></hr>
  <EmailTextInput />
  <hr></hr>
  <PhoneNumber />
  <hr></hr>
  <Counter />
  <hr></hr>
  <PersonalPizza />
  <hr></hr>
  <GroceryCart />
  </div>
 );
}