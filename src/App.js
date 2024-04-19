

import React from 'react';
import NavBar from "./components/NavBar";
import './App.css';
import './index.css';
import Courses from "./Pages/coursesfolder/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./homepage/Home";
import Attendance from "./Pages/Attendance/Attendance";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> {/* Render NavBar outside of Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/attendance' element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

