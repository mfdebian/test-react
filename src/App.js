import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/projects" component={ Projects } />
      </div>
    </Router>
  );
}

export default App;
