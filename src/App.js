import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// Import other page components here

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

