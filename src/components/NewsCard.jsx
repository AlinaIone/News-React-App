import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const NewsCard = (props) => {
  const { id, imageSrc, title, content } = props;

  console.log(id);

  return (
    <div>
      <Link to={`/news/${id}`}>
        <Card style={{ height: "100%" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={imageSrc} />
          <Card.Body>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
