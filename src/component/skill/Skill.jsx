import React from 'react';
import RadarChart from './RadarChart';
import styles from './skill.module.css';
import SkillList from './SkillList';

const Skill = ({ skillRef }) => {
  return (
    <section ref={skillRef}>
      <h2 className={styles.title}>Skill</h2>
      <div className={styles.container}>
        <RadarChart />
        <SkillList />
      </div>
    </section>
  );
};

export default Skill;
