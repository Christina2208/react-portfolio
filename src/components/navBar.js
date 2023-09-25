import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import styles from './navBar.module.css';

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <ul className={styles.navTools}>
          <li>
            <NavLink to="/" className={styles.navNames}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={styles.navNames}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navNames}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={styles.navNames}>
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}