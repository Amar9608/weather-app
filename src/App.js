// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './components/page1.jsx';
import Page2 from './components/page2.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
       
        <nav>
          <ul>
            <li>
              <Link to="/page1?input=HelloPage1">page 1</Link>
            </li>
            <li>
              <Link to="/page2?input=HelloPage2">Page 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
