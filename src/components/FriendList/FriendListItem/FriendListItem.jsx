import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.scss";

export default class FriendListItem extends Component {
  static defaultProps = {};

  static propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { isOnline, avatar, name } = this.props;
    return (
      <li className={styles.item}>
        <span
          className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
        <img className={styles.avatar} src={avatar} alt={name} />
        <p className={styles.name}>{name}</p>
      </li>
    );
  }
}
