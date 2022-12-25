import styles from './Button.module.css';
import { useState } from 'react';

export default function Button() {
  const [isFollowing, setisFollowing] = useState(false);

  return (
    <button
      style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#ebd8ff' }}
      onClick={() => setisFollowing(!isFollowing)}
      className={styles.button}
      type="button"
    >
      {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
    </button>
  );
}
