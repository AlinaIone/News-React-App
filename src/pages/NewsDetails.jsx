import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getIndividualNewsEndpoint } from "../api/endpoints";
import { useAxios } from "../utils/hooks/useAxios";
import { Layout } from "../components/Layout";

export const NewsDetails = () => {
  const { newsId } = useParams();
  const dataFromNews = getIndividualNewsEndpoint(
    "sport/2022/oct/07/cricket-jos-buttler-primed-for-england-comeback-while-phil-salt-stays-focused"
  );
  const data = useAxios(dataFromNews);

  console.log(newsId);
  console.log(dataFromNews);
  console.log(data);

  return (
    <Layout>
      <Container>
        <h1>Titlul știrii</h1>
        <p>Parametrul venit din rută: {newsId}</p>
      </Container>
    </Layout>
  );
};
