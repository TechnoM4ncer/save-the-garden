import './App.css';
import Body from './Components/Body.jsx';
import About from './Components/About.jsx';
import Store from './Components/Store.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Components/About.jsx" element={<About />}/>
        <Route exact path="/Components/Store.jsx" element={<Store />}/>
        <Route exact path="/" element={<Body />}/>
      </Routes>
    </Router>
  )
}

export default App;