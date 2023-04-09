import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FavoritesButton } from "./FavoritesButton";
import styles from './NewsCard.module.css';

// Comp responsable for showing a newsCard with the summary of the news
export const NewsCard = (props) => {
  const { id, thumbnail, title, description } = props;
  return (
    <Card className={`${styles.cardContainer} h-100 d-flex flex-column justify-content-between align-items-center`}>
      <Link to={`/news/${id}`}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body className="px-1 py-3">
          <Card.Title>{title}</Card.Title>
        </Card.Body >
        <Card.Body className="pt-0 pb-1 px-1">
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      <FavoritesButton newsDataToDispatch={props} />
    </Card>
  );
};
