import React, { useRef } from 'react';
import About from './component/about/about';
import Home from './component/home/Home';
import NavBar from './component/navbar/NavBar';
import Skill from './component/skill/Skill';

const App = (props) => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  return (
    <>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} skillRef={skillRef} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skill skillRef={skillRef} />
    </>
  );
};

export default App;
