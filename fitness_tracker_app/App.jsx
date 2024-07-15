import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Exercises from './Excercises';
import NavBar from './NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
