import React from "react";
import Alert from "react-bootstrap/Alert";
import { createPortal } from "react-dom";
import styles from "./FavoriteAlert.module.css";

export const AlertModal = () => {
    return (
        <Alert key={alert} className={styles.alert}>
            News added to FAVORITES
        </Alert>
    );
};

// Comp that displays an alert every time the user has added a news to favorites
export const FavoriteAlert = () => {
    return (
        <>
            {createPortal(
                <AlertModal />,
                document.getElementById("favorite-alert-root")
            )}
        </>
    );
};
