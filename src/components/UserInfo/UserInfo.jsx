import styles from './UserInfo.module.css';
import addCommaToNumber from 'utils/toLocaleString';

export default function UserInfo({ tweets, followers }) {
  return (
    <div className={styles.userInfo}>
      <p>{tweets}</p>
      <p>{addCommaToNumber(followers)}</p>
    </div>
  );
}
