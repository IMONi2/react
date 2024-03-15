import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./page/Start";
import Menystart from "./page/Menystart";
import Menypizza from "./page/Menypizza";
import Video from "./page/Video";
import Omoss from "./page/Omoss";

// Import css for styling
import "./App.css";
import "./menypizza.css";

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route path="/Menystart" element={<Menystart />} />
            <Route path="/Menypizza" element={<Menypizza />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Omoss" element={<Omoss />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;