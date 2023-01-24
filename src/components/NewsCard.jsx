import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../store/Favorites/context";
import { removeFromFavorites, addToFavorites } from "../store/Favorites/actions";

export const NewsCard = (props) => {
  const { id, thumbnail, content, title, description, isToFavorites } = props;
  const { stateFavorites, dispatchFavorites } = useContext(FavoritesContext);

  // Verify if the id is in the Favorites general state. If the ID is we display a REMOVE BUTTON and if is not a ADD BUTTON
  let isFav = false;
  if (stateFavorites.favorites.find((news) => news.id === id)) {
    isFav = true;
  }

  return (
    <Card className="h-100 d-flex flex-column justify-content-between align-items-center">
      {/* <Link to={`/news/${encodeURIComponent(id)}`}> */}
      <Link to={`/news/${id}`}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      {isFav ? (
        <Button
          onClick={() => {
            const actionResult = removeFromFavorites(id);
            // const actionResult = removeFromFavorites({ id, isToFavorites });
            dispatchFavorites(actionResult);
          }}
        >
          Remove from Favorites
        </Button>
      ) : (
        <Button
          onClick={() => {
            const actionResult = addToFavorites({
              id,
              title,
              description,
              thumbnail,
              // isToFavorites: true,
            });
            dispatchFavorites(actionResult);
          }}
        >
          Adds to Favorites
        </Button>
      )}
    </Card>
  );
};
