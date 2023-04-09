import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useContext, useEffect } from "react";
import { FavoritesContext } from "../store/Favorites/context";
import {
    addToFavorites,
    removeFromFavorites,
} from "../store/Favorites/actions";
import { AlertContext } from "../store/Alert/alertContext";
import { isAlertActive } from "../store/Alert/alertActions";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import styles from "./FavoritesButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const star = <FontAwesomeIcon icon={faStar} size="2x" />;

// The Star Button displayed on each card. 
// Responsible to allow the user to add / remove news from favorites
export const FavoritesButton = ({ newsDataToDispatch }) => {
    const { stateFavorites, dispatchFavorites } = useContext(FavoritesContext);
    const { stateAlert, dispatchAlert } = useContext(AlertContext);
    const [_, setNewsInLocalStorage] = useLocalStorage(
        "favorites",
        stateFavorites
    );
    const { id, title, description, thumbnail } = newsDataToDispatch;

    // Needed to update the localStorage each time the button add/remove is clicked
    useEffect(() => {
        setNewsInLocalStorage(stateFavorites);
    }, [stateFavorites, setNewsInLocalStorage]);

    // Clean prev alert timer after clicking on the Add To Fav Button
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatchAlert(isAlertActive(false));
        }, 700);
        return () => {
            clearTimeout(timer);
        };
    }, [stateAlert.isActive]);

    // Verify if the id is in the Favorites general state. If the ID exist we display a REMOVE BUTTON and if is not a ADD BUTTON
    let isFav = false;
    if (stateFavorites.favorites.find((news) => news.id === id)) {
        isFav = true;
    }

    const handleAddToFav = () => {
        dispatchAlert(isAlertActive(true));
        const actionResult = addToFavorites({
            id,
            title,
            description,
            thumbnail,
        });
        dispatchFavorites(actionResult);
    };

    const handleRemoveFromFav = () => {
        const actionResult = removeFromFavorites(id);
        dispatchFavorites(actionResult);
    };

    return (
        <div className={styles.buttons}>
            {isFav ? (
                <Button className={styles["btn-removeFav"]} onClick={handleRemoveFromFav}>
                    {star}
                </Button>
            ) : (
                <Button className={styles["btn-addFav"]} onClick={handleAddToFav}>
                    {star}
                </Button>
            )}
        </div>
    );
};
