import styles from "./portfolioCards.module.css";
import { Link } from "react-router-dom";

export default function PortfolioCards(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <img src={props.img} className={styles.cardImg} />
        <h2 className={styles.cardTitle}>{props.title}</h2>
        <Link to={props.web}>
          <button className={styles.cardBtn}>Go to Project</button>
        </Link>
        <Link to={props.git}>
          <button className={styles.cardBtn}>Go to GitHub</button>
        </Link>
      </div>
    </div>
  );
}