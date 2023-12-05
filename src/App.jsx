import React from "react";

import Home from "./UI/Home";
import { Route, Routes } from "react-router-dom";
import CloudResume from "./UI/CloudResume";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<CloudResume />} />
      <Route path="/resume" element={<Navbar />} />
    </Routes>
  );
}

export default App;
