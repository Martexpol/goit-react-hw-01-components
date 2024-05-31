import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

export default class Statistics extends Component {
  static defaultProps = {};

  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  render() {
    const { title, stats } = this.props;
    return (
      <section className={styles.statistics}>
        {title && <h2 className="title">{title}</h2>}

        <ul className={styles.statList}>
          {stats.map((stat) => (
            <li
              className={styles.item}
              key={stat.id}
              style={{ backgroundColor: this.getRandomHexColor() }}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
