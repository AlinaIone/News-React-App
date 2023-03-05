import React from "react";
import styles from "./Page404.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Cat from "../images/garfield-cat.jpg";

export const Page404 = () => {
  return (
    <div
      className={`${styles.page404} bg-primary text-white d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">Wooops! The cat ate your news! </p>
        <strong className={`${styles.error404} py-5 h1 text-center text-secondary`}>
          404 Page Not Found
        </strong>
        <img src={Cat} alt="garfield-cat" className="pb-5"></img>
        <p className="h4 text-center d-flex flex-grow-1">
          Go to the
          <Link to="/" className="text-light px-2">
            Home Page
          </Link>
        </p>
      </Container>
    </div>
  );
};
