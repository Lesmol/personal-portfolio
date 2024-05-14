import Home from "./UI/Home";
import { Route, Routes } from "react-router-dom";
import CloudResume from "./UI/Resume";
import AboutPage from "./UI/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/resume" element={<CloudResume />} />
    </Routes>
  );
}

export default App;
