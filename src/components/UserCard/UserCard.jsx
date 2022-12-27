import UserInfo from 'components/UserInfo/UserInfo';
import Decorations from 'components/Decorations/Decorations';
import Button from 'components/Button/Button';
import logo from '../../images/logo.png';
import styles from './UserCard.module.css';
import {
  setToLocalStorage,
  getFromLocalStorage,
} from '../../utils/localStorage';
import { useState, useEffect } from 'react';

export const UserCard = ({ user, tweets, followers, avatar }) => {
  const [isFollowing, setisFollowing] = useState(
    getFromLocalStorage(user) ?? false
  );
  const [numberOffollowers, setNumberOffollowers] = useState(followers);

  const toggleFollow = () => {
    setisFollowing(!isFollowing);
  };

  useEffect(() => {
    setToLocalStorage(user, isFollowing);
    setNumberOffollowers(isFollowing ? followers + 1 : followers);
  }, [isFollowing, followers, user]);

  return (
    <li className={styles.usercard}>
      <img className={styles.logo} src={logo} alt="GO IT Logo" />
      <Decorations avatar={avatar} user={user} />
      <UserInfo
        tweets={tweets}
        followers={numberOffollowers}
        isFollowing={isFollowing}
      />
      <Button toggleFollow={toggleFollow} isFollowing={isFollowing} />
    </li>
  );
};
