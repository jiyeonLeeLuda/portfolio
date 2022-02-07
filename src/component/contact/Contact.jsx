import React from 'react';
import styles from './contact.module.css';

const Contact = ({ contactRef }) => (
  <section className={styles.contact} ref={contactRef}>
    <h2 className={styles.title}>Contact</h2>
    <div className={styles.textContainer}>
      <span>mobile : 010-9683-3313</span>
      <span>e-mail : dlwldusq_work@daum.net</span>
    </div>
  </section>
);

export default Contact;
