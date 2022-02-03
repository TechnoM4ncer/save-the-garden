import './App.css';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import About from './Components/About.jsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Components/About.jsx" element={<About />}/>
  
        <Route exact path="/" element ={<Body />}/>
      </Routes>
    </Router>
  )
}

export default App;