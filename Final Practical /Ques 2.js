//Q2) React Router Setup with 3 Pages

//ANSWER:
//Step 1: Install React Router
//npm install react-router-dom

//Step 2: App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

//Output Behavior

// `/` → Home Page
// `/about` → About Page
// `/contact` → **Contact Page
// Navigation bar allows switching between pages without reload.