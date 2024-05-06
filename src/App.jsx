import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login';
import SignUp from './components/SignUp'; 
import JoinQueue from './components/JoinQueue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/joinqueue" element={<JoinQueue />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;