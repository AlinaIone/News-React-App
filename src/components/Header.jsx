import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../logo/News-Logo.png";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const [isShowed, setIsShowed] = useState(false);

  let dropdownMenuClasses = isShowed
    ? styles.displayMobileMenu
    : styles.dropdownMenu;


  // If the max-width is grater than 768 the state of the isShowed is set to false
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsShowed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log("We are executing Resize useEffect");
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <NavLink to="/" className="p-3 py-0">
            <img src={logo} alt="news logo" />
          </NavLink>
          <div className={styles.menuIconContainer}>
            <span
              className={`material-icons ${styles.menuIcon} text-light`}
              onClick={() => setIsShowed((prevValue) => !prevValue)}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </span>

            {isShowed && (
              <div
                className={styles.overlay}
                onClick={() => setIsShowed(false)}
              ></div>
            )}

            <ul
              className={dropdownMenuClasses}
              onClick={() => setIsShowed(false)}
            >
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
