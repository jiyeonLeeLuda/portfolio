import React from 'react';
import styles from './about.module.css';
import AboutJob from './AboutJob';
import AboutMajor from './AboutMajor';

const About = ({ aboutRef }) => {
  const majors = [
    {
      iconName: 'fab fa-html5',
      title: 'Front-end',
      subTitle: 'HTML, CSS, JavaScript',
      description: 'React, TypeScript, Web APIs',
    },
    {
      iconName: 'fas fa-mobile',
      title: 'Mobile',
      subTitle: 'Android',
      description: 'Java, Kotlin',
    },
    ,
    {
      iconName: 'fas fa-server',
      title: 'Back-end',
      subTitle: 'Node.js, Flask',
      description: 'MySQL, Rest APIs, AWS',
    },
  ];

  const jobs = [
    {
      name: '(주) 이빛컴퍼니',
      period: '2020 ~ 2021',
      works: [
        '인공지능기반 음성인식 간편 쇼핑 앱 개발 및 배포',
        '가게 관리자용 웹, 앱 개발 및 배포 (flutter)',
        '음성인식 & 제품 추천 요구사항 분석 및 설계 참여',
        'AWS Lambda를 활용한 rest-api 서버 개발',
      ],
    },
    {
      name: '(주) 더 트라이브',
      period: '2019 ~ 2020',
      works: [
        '관리자 웹사이트 (React,JS) 개발 및 배포',
        '관리자 웹 Rest-Api 서버(Flask,MySQL) 개발 참여',
        '차량 구독서비스 요구사항 분석 및 설계, 솔루션 개발',
        'node.js 서버를 flask로 마이그레이션 참여',
        'MySQL 테이블 설계 참여, stored procedure 쿼리 작성',
      ],
    },
    {
      name: 'PaTI : 파주 타이포그라피 학교',
      period: '2016 ~ 2017 (중퇴)',
      works: [
        '출판 : BB2 프로젝트 독립출판 가로지르기 - 에세이 기행문',
        '북페어 : BB2 UNLIMITED EDITION ( Seoul Art Book Fair)',
        '전시: <ㅍㅅ>  [PaTI + 배병우 창작 레지던시]',
        '전시: design without Design​  [전자요리연구회] 오픈키친 워크샵',
      ],
    },
    {
      name: '추계 예술 대학교',
      period: '2010 ~ 2015 (졸업)',
      works: [
        '교육: 공공미술 삼거리, 감각하는 미술 - 닭에서 알까지',
        '전시: FREE AGENT  [요상한 살빼기]',
        '전시: 모음짓 [작업의서사]',
        '작업: 한국 극지 연구소 - 멈춰진 시간 벽화작업',
      ],
    },
  ];
  return (
    <section className={styles.about} ref={aboutRef}>
      <h2 className={styles.title}>About me</h2>
      <p className={styles.description}>
        프로그래밍으로 더 나은 세상을 만들고 싶은,
        <br />
        미술을 전공해서 예술,문화,사람에 관심많은,
        <br />
        실천하는 예술로써 프로그래밍을 하고자 하는 개발자.
      </p>
      <div className={styles.about__majors}>
        {majors.map((major) => (
          <AboutMajor key={major.title} major={major} />
        ))}
      </div>
      <ul className={styles.about__jobs}>
        {jobs.map((job) => (
          <AboutJob key={job.name} job={job} />
        ))}
      </ul>
    </section>
  );
};

export default About;
