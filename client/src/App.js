import React, { useContext } from "react";
import Landing from "./pages/Landing";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/" element={<div>Dashboard</div>} />

        <Landing />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
