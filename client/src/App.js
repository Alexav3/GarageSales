import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Sales from "./pages/Sales";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
