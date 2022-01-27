import React from 'react';
import styles from './skill-list.module.css';

const SkillList = (props) => (
  <section className={styles.skillList}>
    <div className='apis'>
      <h3>APIs</h3>
      <ul>
        <li>KaKao Pay</li>
        <li>Boot Pay</li>
        <li>Cloudinary</li>
        <li>Firebase-Auth</li>
        <li>Firebase-CloudMessage</li>
        <li>Firebase-FireStore</li>
        <li>Firebase-RealTimeDB</li>
      </ul>
    </div>
    <div className='library'>
      <h3>Library</h3>
      <ul>
        <li>React</li>
        <li>Redux, MobX</li>
        <li>Axios</li>
        <li>Billboard (chart)</li>
        <li>Emotion</li>
        <li>Material-UI</li>
        <li>PostCSS</li>
        <li>React testing Library</li>
      </ul>
    </div>
  </section>
);

export default SkillList;
