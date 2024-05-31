import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";
import FriendListItem from "./FriendListItem/FriendListItem";

export default class FriendList extends Component {
  static defaultProps = {
    friends: [],
  };

  static propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { friends } = this.props;
    return (
      <ul className={styles.friendList}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    );
  }
}
