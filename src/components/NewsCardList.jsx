import React from "react";
import { NewsCard } from "./NewsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NewsCardList = (props) => {
  const { newsList } = props;

  return (
    <div>
      <Container>
        <Row>
          {newsList.map((news) => {
            return (
              <Col xs={12} md={6} lg={4} className="mb-4 px-4" key={news.id}>
                <NewsCard
                  id={news.id}
                  thumbnail={news.thumbnail}
                  content={news.content}
                  title={news.title}
                  description={news.description}
                // isToFavorites={news.isToFavorites || false}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
