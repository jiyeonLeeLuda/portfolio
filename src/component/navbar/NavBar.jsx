import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { useMediaQuery } from 'react-responsive';

const NavBar = ({ homeRef, aboutRef, skillRef, myWorkRef, contactRef }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 769px)',
  });
  const [showMenus, setShowMenus] = useState(false);
  const onClickMenuDropDown = () => {
    setShowMenus(!showMenus);
  };
  const onClickHome = () => {
    homeRef.current.scrollIntoView();
  };

  const onClickAbout = () => {
    aboutRef.current.scrollIntoView();
  };

  const onClickSkill = () => {
    skillRef.current.scrollIntoView();
  };

  const onClickMyWork = () => {
    myWorkRef.current.scrollIntoView();
  };

  const onClickContact = () => {
    contactRef.current.scrollIntoView();
  };
  useEffect(() => {
    setShowMenus(isDesktop);
  }, [isDesktop]);
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <i className='far fa-hand-spock'></i>
        <span>Lee JiYeon</span>
      </div>
      <ul className={`${styles.menus} ${showMenus ? styles.active : ''}`}>
        <li onClick={onClickHome}>Home</li>
        <li onClick={onClickAbout}>About</li>
        <li onClick={onClickSkill}>Skill</li>
        <li onClick={onClickMyWork}>MyWork</li>
        <li onClick={onClickContact}>Contact</li>
      </ul>
      <section className={`${styles.link} ${showMenus ? styles.active : ''}`}>
        <a href='https://github.com/jiyeonLeeLuda' target={'_blank'}>
          <i className='fab fa-github'></i>
        </a>
        {/* <a href='mailto:dlwldusq_work@daum.net' target={'_blank'}>
          <i className='far fa-envelope'></i>
        </a> */}
      </section>
      <button className={styles.menuDropDown} onClick={onClickMenuDropDown}>
        <i className='fas fa-bars'></i>
      </button>
    </header>
  );
};

export default NavBar;
