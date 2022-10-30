import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/home';
import Tuning from './components/tuning';
import { tunings } from './assets/tunings';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [bookmarkedChords, setBookmarkedChords] = useState([]);

  const navItems = Object.keys(tunings);

  useEffect(() => {
    document.body.style.backgroundColor = '#faf9f6';
  });

  // const handleSetBookmark = id => {
  //   // Open-g
  //   // 
  //   // setBookmarkedChords([...bookmarkedChords, ])
  // }

  return (
    <Router>
      <div className="App">
        <header>
          <div className="container">
            <div className="nav-layout">
              <Link to="/"><h1>Banjo Tunings</h1></Link>
            </div>
          </div>
        </header>

        <section className="container" style={{ marginTop: "2rem" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:id" element={<Tuning />} />
          </Routes>
        </section>

      </div>
    </Router>

  );
}

export default App;