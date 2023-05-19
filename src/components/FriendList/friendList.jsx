import css from "./friendList.module.css"
import PropTypes from "prop-types";


export const FriendList =({friends})=>(
  <ul className={css["friend-list"]}>

  {friends.map(friend=>(
    <li className={css.item}>
    <span className={css[`isOnline-${friend.isOnline}`]
  }></span>
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>
  ))}

  </ul>);

FriendList.propTypes = {data: PropTypes.array};