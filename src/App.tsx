import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
