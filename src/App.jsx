import React, { useRef } from 'react';
import About from './component/about/about';
import Home from './component/home/Home';
import NavBar from './component/navbar/NavBar';
import Skill from './component/skill/Skill';
import Work from './component/work/Work';

const App = (props) => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const myWorkRef = useRef();
  return (
    <>
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillRef={skillRef}
        myWorkRef={myWorkRef}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skill skillRef={skillRef} />
      <Work myWorkRef={myWorkRef} />
    </>
  );
};

export default App;
