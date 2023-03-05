import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "./FavoriteAlert.module.css";

export const FavoriteAlert = () => {
    return (
        <Alert key={alert} className={styles.alert}>
            News added to FAVORITES
        </Alert>
    );
};
