import React, { useRef } from 'react';
import Home from './component/home/Home';
import NavBar from './component/navbar/NavBar';

const App = (props) => {
  const homeRef = useRef();
  return (
    <>
      <NavBar homeRef={homeRef} />
      <Home homeRef={homeRef} />
    </>
  );
};

export default App;
