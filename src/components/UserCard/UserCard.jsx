import styles from './UserCard.module.css';
import logo from '../../images/logo.png';
import UserInfo from 'components/UserInfo/UserInfo';
import Decorations from 'components/Decorations/Decorations';
import Button from 'components/Button/Button';

export const UserCard = ({ avatar, tweets, followers }) => {
  return (
    <li className={styles.usercard}>
      <img className={styles.logo} src={logo} alt="GO IT Logo" />
      <Decorations avatar={avatar} />
      <UserInfo tweets={tweets} followers={followers} />
      <Button />
    </li>
  );
};
