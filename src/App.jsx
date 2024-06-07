import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booksearchpage from './pages/BookSearchPage';
import Mybookself from './pages/MyBookshelf';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Book Finder</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Booksearchpage />} />
            <Route path="/mybookself" element={<Mybookself />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;