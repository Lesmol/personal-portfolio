import React from "react";

import Home from "./UI/Home";
import { Route, Routes } from "react-router-dom";
import CloudResume from "./UI/CloudResume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<CloudResume />} />
    </Routes>
  );
}

export default App;
