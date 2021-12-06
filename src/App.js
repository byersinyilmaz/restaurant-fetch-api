import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant';
import Nav from './Nav';
import React, { useState } from 'react';

function App() {

  const [restaurants, setRestaurants] = useState([]);

  return (
    <div className="restaurants">
      <Nav restaurants={restaurants} setRestaurants={setRestaurants} />
      {restaurants.map(rt => <Restaurant key={rt.id} restaurant = {rt}/>)}
    </div>
  );
}

export default App;
