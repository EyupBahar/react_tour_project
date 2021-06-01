import React from 'react';
import Card from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      
      <Navbar/>
      
      <Header/>
      <Card/>

    </div>
  );
}

export default App;
