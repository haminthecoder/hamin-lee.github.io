import React from 'react';
import logo from './logo.svg';
import Intro from "./components/Intro";
import Employment from "./components/Employment";


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <Intro/>
        <Employment/>
      </div>
      
    </div>
  );
}

export default App;
