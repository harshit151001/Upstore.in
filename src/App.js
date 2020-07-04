import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Routes/Home';
import styled from 'styled-components';

function App() {
  const Ancestor = styled.div`
    width: 100vw;
    overflow-x: hidden;
    min-height: 200vh;
  `;
  return (
    <Ancestor>
      <Navbar />
      <Home />
    </Ancestor>
  );
}

export default App;
