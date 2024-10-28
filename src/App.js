import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Prediction from './pages/Prediction';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar */}
      <div className="container mx-auto mt-8">
        <Routes>
          {/* Define routes for each of the pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
