import React from 'react';
import styles from './UserInfo.module.css';

export default function UserInfo({ tweets, followers }) {
  return (
    <div className={styles.userInfo}>
      <p>{tweets}</p>
      <p>{followers}</p>
    </div>
  );
}
