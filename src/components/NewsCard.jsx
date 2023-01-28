import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FavoritesButton } from "./FavoritesButton";

export const NewsCard = (props) => {
  const { id, thumbnail, title, description } = props;
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
      <FavoritesButton newsDataToDispatch={props} />
    </Card>
  );
};
