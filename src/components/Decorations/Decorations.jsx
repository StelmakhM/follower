import React from 'react';
import styles from './Decorations.module.css';
import ellipse from '../../images/ellipse.png';

export default function Decorations({ avatar }) {
  return (
    <>
      <span className={styles.horizontalLine}></span>
      <img className={styles.circleBorder} src={ellipse} alt="Ellipse" />
      <div className={styles.circleBg}>
        <img src={avatar} alt="" width="72" />
      </div>
    </>
  );
}
