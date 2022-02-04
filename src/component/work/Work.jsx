import React from 'react';
import Card from './Card';
import styles from './work.module.css';

const Work = ({ myWorkRef }) => {
  const projects = [
    {
      title: '명함관리 앱',
      description:
        'firebase realtime db가 적용된 실시간 명함 편집기 입니다. 반영된 수정사항은 실시간으로 db에 반영됩니다. 반응형 웹사이트 입니다.',
      imgUrl: '/img/projects/07_cardMaker.png',
      link: 'https://jiyeonleeluda.github.io/cardMaker/',
    },
    ,
    {
      title: '미니언즈를 찾아라!',
      description: 'vanila JavaScript로 만든 게임입니다.',
      imgUrl: '/img/projects/06_findMeGame.png',
      link: 'https://jiyeonleeluda.github.io/findMeGame/',
    },
    {
      title: '유튜브 클론 by 리액트',
      description:
        'youtube data api를 사용하여 유투브 영상을 검색 및 재생할 수 있습니다. 반응형 웹사이트 입니다.',
      imgUrl: '/img/projects/05_reactYoutube.png',
      link: 'https://jiyeonleeluda.github.io/youtubeCloneReact/',
    },
    {
      title: '유튜브 클론 by html',
      description:
        'html과 css만 이용하여 유튜브 사이트를 반응형으로 제작하였습니다.',
      imgUrl: '/img/projects/04_vanilaYoutube.png',
      link: 'https://jiyeonleeluda.github.io/cloneYoutube/',
    },
    {
      title: '디자이너 포트폴리오 및 쇼핑몰',
      description: 'HTML, PHP, JavaScript, CSS / 서버 : Apache /DB MySQL',
      imgUrl: '/img/projects/03_studioLuda.png',
      link: 'https://vimeo.com/325860959',
    },

    {
      title: 'Android App : Flowing',
      description:
        '몰입상태를 유지할 수 있도록 도움을 주는 앱 입니다. 집중 시간을 트래킹하고 집중력 향상음악을 들을 수 있습니다.',
      imgUrl: '/img/projects/02_flowing.png',
      link: 'https://vimeo.com/325861133',
    },
    {
      title: 'Android App : PT at Home',
      description:
        '집에서 PT를 받고싶은 고객과 트레이너를 연결해주는 서비스 입니다.',
      imgUrl: '/img/projects/01_ptAtHome.png',
      link: 'https://vimeo.com/325857106',
    },
  ];

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
