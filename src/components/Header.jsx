import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link, NavLink } from "react-router-dom";
import { Home } from "../pages/Home";
import styles from "./Header.module.css";

export const Header = () => {
  const [isShowed, setIsShowed] = useState(false);

  let dropdownMenuClasses = styles.dropdownMenu;

  if (isShowed) {
    dropdownMenuClasses += `${styles.displayMobileMenu}`;
  }

  return (
    <header>
      <nav className={`${styles.nav} w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className="p-3">
            <img
              src="https://itschool.ro/images/logo-itschool-dark.svg"
              alt="itschool logo"
            />
          </NavLink>
          <div className={styles.menuIconContainer}>
            <span
              className={`material-icons ${styles.menuIcon} text-light`}
              onClick={() => setIsShowed((prevValue) => !prevValue)}
            >
              menu
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isShowed ? "container" : null}>
                <NavLink
                  to="/category/technology"
                  className="p-3 text-uppercase text-light"
                >
                  Tech
                </NavLink>
              </li>

              <li className={isShowed ? "container" : null}>
                <NavLink
                  to="/category/music"
                  className="p-3 text-uppercase text-light"
                >
                  Music
                </NavLink>
              </li>

              <li className={isShowed ? "container" : null}>
                <NavLink
                  to="/category/science"
                  className="p-3 text-uppercase text-light"
                >
                  Science
                </NavLink>
              </li>

              <li className={isShowed ? "container" : null}>
                <NavLink
                  to="/favorites"
                  className="p-3 text-uppercase text-light"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};
