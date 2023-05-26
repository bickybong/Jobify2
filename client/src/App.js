import React, { useContext, useRef } from "react";
import Landing from "./pages/Landing";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter></BrowserRouter>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<div>Dashboard</div>} />
    //     <Route path="/register" element={<div>Register</div>} />
    //     <Route path="/landing" element={<Landing />} />
    //     <Route path="*" element={<div>Error</div>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
