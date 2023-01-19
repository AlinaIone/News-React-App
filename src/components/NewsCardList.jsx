import React from "react";
import { NewsCard } from "./NewsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NewsCardList = (props) => {
  const { newsList } = props;
  console.log(newsList.description);

  return (
    <div>
      <Container>
        <Row>
          {newsList.map((news) => {
            return (
              <Col xs={12} md={4} className="mb-4" key={news.id}>
                <NewsCard
                  id={news.id}
                  imageSrc={news.thumbnail}
                  content={news.content}
                  title={news.title}
                  description={news.description}
                />
              </Col>
            );
          })}

          {/* <Col xs={12} md={4}>
            <NewsCard
              imageSrc={
                "https://media.guim.co.uk/4aea7d84beb29190c44b3def33e002974d527719/0_182_5472_3283/500.jpg"
              }
              content={"blaa blaaaaaa vlaaaaaaaa"}
              title={"blaaaaaaaa"}
            />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
