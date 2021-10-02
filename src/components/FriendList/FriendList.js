import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export function FriendList({friends}) {
  return <ul className={styles.friendList}>
    {friends.map(friend => {
      return FriendListItem(friend)
      })
    }
  </ul>
}


function FriendListItem({ avatar, name, isOnline, id }) {
  return <li className={styles.item} key={id}>
            <span className={isOnline ? styles.statusOnLine : styles.statusOffLine}></span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
         </li>
}

FriendList.default = {
  avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}

FriendList.propType = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }))
}