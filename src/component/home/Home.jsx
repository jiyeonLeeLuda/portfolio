import React from 'react';
import styles from './home.module.css';

const Home = ({ homeRef }) => {
  return (
    <section className={styles.home} ref={homeRef}>
      {/* <img className={styles.avatar} src='img/avatar2.jpg' alt='avatar' /> */}
      <div className={styles.textbox}>
        <span>Front-End</span>
        <span>Developer</span>
        <br />
        <span>소통하는 개발자</span>
        <span>이지연 입니다.</span>
      </div>
    </section>
  );
};

export default Home;
