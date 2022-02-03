import React from 'react';
import styles from './card.module.css';

const Card = ({ project }) => {
  const { title, imgUrl, link, description } = project;
  return (
    <li className={styles.card}>
      <img className={styles.img} src={imgUrl} alt={title} />
      <div className={styles.contents}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a
          href={link}
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          더보기
        </a>
      </div>
    </li>
  );
};

export default Card;
