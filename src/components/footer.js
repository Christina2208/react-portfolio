import { Link } from "react-router-dom";
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
      <div className={styles.box2}>
        <Link to="https://github.com/Christina2208">
        <FontAwesomeIcon icon={faGithub} className={styles.faBrands} />
        </Link>
        <Link to="https://www.linkedin.com/in/chris-feland-4b1084255/">
        <FontAwesomeIcon icon={faLinkedin} className={styles.faBrands} />
        </Link>
        <Link to="https://stackoverflow.com/users/21305621/blondieee22?tab=profile">
        <FontAwesomeIcon icon={faStackOverflow} className={styles.faBrands} />
        </Link>
      </div>
    )
  }