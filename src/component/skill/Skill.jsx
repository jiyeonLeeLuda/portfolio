import React from 'react';
import RadarChart from './RadarChart';
import styles from './skill.module.css';
import SkillList from './SkillList';

const Skill = ({ skillRef }) => {
  return (
    <section className={styles.skill} ref={skillRef}>
      <h2 className={styles.title}>Skill</h2>
      <div className={styles.container}>
        <div className={styles.chart}>
          <RadarChart />
        </div>
        <SkillList />
      </div>
    </section>
  );
};

export default Skill;
