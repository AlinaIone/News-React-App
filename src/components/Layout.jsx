import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

export const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
