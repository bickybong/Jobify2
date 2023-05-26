import React, { useContext } from "react";
import Landing from "./pages/Landing";
import styled from "styled-components";

const Button1 = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`;
const Button2 = styled.button`
  background: blue;
  color: white;
  font-size: 1rem;
`;

function App() {
  return (
    <div className="App">
      <Button2>Click me</Button2>
      <h1>Jobify</h1>
      {/* <Landing /> */}
    </div>
  );
}

export default App;
