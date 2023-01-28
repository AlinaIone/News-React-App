import React from 'react'
import Button from "react-bootstrap/Button";
import { useContext } from 'react';
import { FavoritesContext } from '../store/Favorites/context';
import { addToFavorites, removeFromFavorites } from '../store/Favorites/actions'
import { AlertContext } from "../store/Alert/alertContext";
import { isAlertActive } from '../store/Alert/alertActions';

export const FavoritesButton = ({ newsDataToDispatch }) => {
    const { stateFavorites, dispatchFavorites } = useContext(FavoritesContext)
    const { dispatchAlert } = useContext(AlertContext);
    const { id, title, description, thumbnail, } = newsDataToDispatch;

    // Verify if the id is in the Favorites general state. If the ID is we display a REMOVE BUTTON and if is not a ADD BUTTON
    let isFav = false;
    if (stateFavorites.favorites.find((news) => news.id === id)) {
        isFav = true;
    }

    return (
        <>
            <div>{isFav ? (
                <Button
                    onClick={() => {
                        const actionResult = removeFromFavorites(id);
                        dispatchFavorites(actionResult);
                    }}
                >
                    Remove from Favorites
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        dispatchAlert(isAlertActive(true));
                        setTimeout(() => {
                            dispatchAlert(isAlertActive(false))
                        }, 1000)
                        const actionResult = addToFavorites({
                            id,
                            title,
                            description,
                            thumbnail,
                        });
                        dispatchFavorites(actionResult);
                    }}
                >
                    Adds to Favorites
                </Button>
            )
            }</div>
        </>
    )
}
