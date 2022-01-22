import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { useMediaQuery } from 'react-responsive';

const NavBar = (props) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 769px)',
  });
  console.log(isDesktop);

  const [showMenus, setShowMenus] = useState(false);
  const onClickMenuDropDown = () => {
    setShowMenus(!showMenus);
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
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>MyWork</li>
        <li>Contact</li>
      </ul>
      <section className={`${styles.link} ${showMenus ? styles.active : ''}`}>
        <i className='fab fa-github'></i>
        <i className='far fa-envelope'></i>
      </section>
      <button className={styles.menuDropDown} onClick={onClickMenuDropDown}>
        <i className='fas fa-bars'></i>
      </button>
    </header>
  );
};

export default NavBar;
