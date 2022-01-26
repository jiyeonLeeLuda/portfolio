import React from 'react';
import styles from './about-major.module.css';

const AboutMajor = ({ major }) => {
  const { iconName, title, subTitle, description } = major;
  return (
    <div className={styles.major}>
      <div className={styles.major__icon}>
        <i className={iconName}></i>
      </div>
      <div className={styles.major__title}>{title}</div>
      <div className='major__description'>{subTitle}</div>
      <div className='major__description'>{description}</div>
    </div>
  );
};

export default AboutMajor;
