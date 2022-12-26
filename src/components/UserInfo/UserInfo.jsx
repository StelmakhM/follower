import styles from './UserInfo.module.css';
import addCommaToNumber from 'utils/toLocaleString';

export default function UserInfo({ tweets, followers, isFollowing }) {
  return (
    <div className={styles.userInfo}>
      <p>{tweets}</p>
      <p>
        {isFollowing
          ? addCommaToNumber(followers + 1)
          : addCommaToNumber(followers)}
      </p>
    </div>
  );
}
