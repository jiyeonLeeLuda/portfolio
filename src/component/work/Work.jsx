import React from 'react';
import Card from './Card';
import styles from './work.module.css';

const Work = ({ myWorkRef }) => {
  const projects = [
    {
      title: '명함관리 앱',
      description:
        'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다.',
      imgUrl: '/img/projects/07_cardMaker.png',
      link: 'https://github.com/jiyeonLeeLuda',
    },
    ,
    {
      title: '명함관리 앱',
      description:
        'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다.',
      imgUrl: '/img/projects/07_cardMaker.png',
      link: 'https://github.com/jiyeonLeeLuda',
    },
    {
      title: '명함관리 앱',
      description:
        'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다.',
      imgUrl: '/img/projects/07_cardMaker.png',
      link: 'https://github.com/jiyeonLeeLuda',
    },
    {
      title: '명함관리 앱',
      description:
        'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다.',
      imgUrl: '/img/projects/07_cardMaker.png',
      link: 'https://github.com/jiyeonLeeLuda',
    },
    {
      title: '명함관리 앱',
      description:
        'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다.',
      imgUrl: '/img/projects/07_cardMaker.png',
      link: 'https://github.com/jiyeonLeeLuda',
    },
  ];
  const project = {
    title: '명함관리 앱',
    description:
      'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다.',
    imgUrl: '/img/projects/07_cardMaker.png',
    link: 'https://github.com/jiyeonLeeLuda',
  };
  return (
    <section className={styles.myWork} ref={myWorkRef}>
      <h2 className={styles.title}>My Work</h2>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <Card project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Work;
