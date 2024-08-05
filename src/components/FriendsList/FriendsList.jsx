import css from "./FriendsList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
