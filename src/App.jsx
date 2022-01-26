import React, { useRef } from 'react';
import About from './component/about/about';
import Home from './component/home/Home';
import NavBar from './component/navbar/NavBar';

const App = (props) => {
  const homeRef = useRef();
  const aboutRef = useRef();
  return (
    <>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
    </>
  );
};

export default App;
