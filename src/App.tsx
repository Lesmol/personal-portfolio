import Home from "./UI/Home";
import { Route, Routes } from "react-router-dom";
import CloudResume from "./UI/Resume";
import About from "./UI/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<CloudResume />} />
    </Routes>
  );
}

export default App;
