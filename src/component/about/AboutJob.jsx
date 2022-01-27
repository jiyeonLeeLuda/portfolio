import React from 'react';
import styles from './about-job.module.css';

const AboutJob = ({ job }) => {
  const { name, period, works = [] } = job;

  return (
    <li className={styles.job}>
      <div className={styles.textContainer}>
        <p className={styles.job__name}> {name}</p>
        <p className={styles.job__period}>{period}</p>
      </div>
      <ul className={styles.works}>
        {works.map((work) => (
          <li key={work}>{work}</li>
        ))}
      </ul>
    </li>
  );
};

export default AboutJob;
