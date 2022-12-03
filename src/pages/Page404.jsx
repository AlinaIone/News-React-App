import React from "react";
import styles from "./Page404.module.css";
import Container from "react-bootstrap/Container";

export const Page404 = () => {
  return (
    <div
      className={`${styles.page404} bg-secondary text-white d-flex flex-column justify-content-center align-items-center`}
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">Wooops! The cat ate your file! </p>
        {/* Find a picture with a cat eating a paper */}
        <img></img>
        <strong className={`${styles.error404} pb-5`}>
          404 Page Not Found
        </strong>
        <p className="h4 text-center">Go to the Home Page</p>
      </Container>
    </div>
  );
};
